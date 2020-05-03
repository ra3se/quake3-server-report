const Discord = require('discord.js');

const {Client, RichEmbed} = Discord;
const client = new Client();

const commandPrefix = '!';
const errorMessage = 'I must be sick, error, error, error...';

const queryErrorResponse = (msg) =>
	msg.channel.send('The server is currently offline :(')

const getRichEmbed = () => new RichEmbed()
	.setThumbnail('http://ra3.lorio.se/logo.png');

module.exports = function (config, query) {
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

				return state;
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
				return state
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
