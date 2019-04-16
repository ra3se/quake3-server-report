const Discord = require('discord.js');

const {Client, RichEmbed} = Discord;
const client = new Client();

const commandPrefix = '!';
const errorMessage = 'I must be sick, error, error, error...';

function queryErrorResponse(msg) {
	msg.channel.send('The server is currently offline :(');
}

function getRichEmbed() {
	return new RichEmbed()
		.setThumbnail('http://ra3.lorio.se/logo.png');
}

function prettyName(name) {
	return name.replace(/\^\d{1}/g, '');
}

module.exports = function (config, query, serverEvents) {
	const hook = new Discord.WebhookClient(config.hook.id, config.hood.token);
	let hookMessage = '';
	const hookLastMessage = Date.now();
	let hookTimeout;

	function hookSend(message) {
		if (message) {
			hookMessage += `${hookMessage.length > 0 ? '\n' : ''}${message}`;
		}

		if (hookTimeout) {
			clearTimeout(hookTimeout);
		}

		if ((Date.now() - hookLastMessage) > 5e3) {
			hook.send(hookMessage);
		} else {
			hookTimeout = setTimeout(hookSend, 1e3);
		}
	}

	serverEvents.on('connect', data => {
		hookSend(`${prettyName(data.player)} joined the server.`);
	});

	serverEvents.on('kill', data => {
		const weapon = data.weapon.replace(/_SPLASH|_DISCHARGE/, '').toLowerCase();
		hookSend(`${prettyName(data.killer)} killed ${prettyName(data.victim)} by ${weapon}`);
	});

	serverEvents.on('init', data => {
		hookSend(`Loaded new map ${data.mapname}`);
	});

	const commands = {
		status(msg) {
			const embed = getRichEmbed()
				.setTitle('Server status');

			return query().catch(() => {
				embed.setColor(0xFF0000)
					.addField('Status', 'offline');
				msg.channel.send(embed);
			}).then(state => {
				embed.setColor(0x00FF00)
					.setTitle(state.name)
					.setThumbnail(`http://ra3.lorio.se/levelshots/${state.map}.jpg`)
					.addField('Status', 'online')
					.addField('Map', state.map)
					.addField('Players', state.players.length)
					.setURL('http://ra3.lorio.se');
				msg.channel.send(embed);
			});
		},
		stats(msg) {
			const embed = getRichEmbed()
				.setTitle('Current player stats');

			return query().catch(queryErrorResponse).then(state => {
				if (state.players.length > 0) {
					state.players.forEach(player => {
						embed.addField(player.name, `${player.frags} frags`);
					});

					msg.channel.send(embed);
				} else {
					msg.channel.send('No one is currently playing :(');
				}
			});
		},
		identify(msg) {
			// Msg.author.id
			if (msg.content.lenght) {
				console.log(`link ${msg.author.id} to player ${msg.content}`);
				msg.reply(`You are now identified as player "${msg.content}"`);
			} else {
				msg.reply('Please add nickname to identify command "!identify nick1" ' +
					'for multiple nicknames seperate them with ","');
			}
		}
	};

	commands.ident = commands.identify;

	client.on('ready', () => {
		console.log(`Logged in as ${client.user.tag}!`);
	});

	client.on('message', msg => {
		for (const key in commands) {
			if (Object.prototype.hasOwnProperty.call(commands, key)) {
				const command = commands[key];
				const cmdRegExp = new RegExp(`^${commandPrefix}${key}`);
				if (cmdRegExp.test(msg.content)) {
					msg.content = msg.content.replace(cmdRegExp, '');
					try {
						command(msg);
					} catch (error) {
						console.log(errorMessage, error);
						msg.channel.send(errorMessage);
					}
				}
			}
		}
	});

	client.on('debug', info => {
		console.log(info);
	});

	client.on('disconnect', evt => {
		console.log('Disconnected', evt);
	});

	client.login(config.token);

	return client;
};
