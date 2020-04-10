/* eslint-disable camelcase */

const faker = require('faker');
const MINUTE = 60 * 1e3;
const MAP_TIMEOUT = Number(MINUTE);
const WEAPONS = require('../src/lib/constant/weapon-dmg');

const getRandomArbitrary = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const getRandomFromArray = arr =>
	arr[getRandomArbitrary(1, arr.length - 1)];

const objectToEvent = obj =>
	`\\${Object.keys(obj)
		.map(key => [key, obj[key]].join('\\'))
		.join('\\')}`;

const getWeapon = () => {
	const weapon = getRandomFromArray(Object.keys(WEAPONS));
	return {id: Object.keys(WEAPONS).indexOf(weapon), name: weapon};
};

const getRandomColor = () =>
	faker.random.boolean() ? `^${getRandomArbitrary(0, 7)}` : '';

const getRandomColorText = text =>
	text.split('').map(c => `${getRandomColor()}${c}`).join('');

const getPlayer = id => ({
	id,
	name: getRandomColorText(faker.commerce.productMaterial()),
	ip: [...new Array(4)].map(() => getRandomArbitrary(0, 254)).join('.')
});

const getPlayers = () =>
	[...new Array(10).keys()].map(id => getPlayer(id));

const getServer = map => ({
	sv_dlURL: 'ra3.lorio.se/game',
	sv_allowDownload: '1',
	capturelimit: '8',
	g_maxGameClients: '0',
	sv_maxclients: '16',
	timelimit: MAP_TIMEOUT,
	fraglimit: '0',
	dmflags: '0',
	sv_hostname: 'Super Best Friends',
	sv_minRate: '0',
	sv_maxRate: '0',
	sv_dlRate: '100',
	sv_minPing: '0',
	sv_maxPing: '0',
	sv_floodProtect: '0',
	version: 'ioq3 1.36+u20160122+dfsg1-1/Ubuntu linux-x86 Jan 22 2016',
	com_gamename: 'Quake3Arena',
	com_protocol: '71',
	g_gametype: '8',
	mapname: map.name,
	sv_privateClients: '0',
	location: '0',
	gamename: 'arena',
	g_needpass: '0',
	g_version: 'RA3 1.76a Feb  3 2006 22:55:45',
	g_timeLeft: '27'
});

const getMap = () => ({name: `ra3map${getRandomArbitrary(1, 20)}`});

const triggerEvent = event =>
	console.log(event);

const triggerShutdown = () =>
	triggerEvent(`ShutdownGame:\n${'-'.repeat(60)}\n${'-'.repeat(60)}`);

const triggerInitGame = server =>
	triggerEvent(`InitGame: ${objectToEvent(server)}`);

const triggerConnection = player => {
	triggerEvent(`ClientConnect: ${player.id} ${player.name} (${player.ip})`);
	setTimeout(() => {
		player.initialized = true;
		triggerEvent(`ClientBegin: ${player.id} ${player.name} (${player.ip})`);
	}, getRandomArbitrary(20, 500));
};

const triggerKill = (attacker, target, weapon) =>
	triggerEvent(`Kill: ${attacker.id} ${target.id} ${weapon.id} 0: ${attacker.name} killed ${target.name} by ${weapon.name}`);

const triggerSay = (player, message) =>
	triggerEvent(`say: ${player.id} 0: ${player.name}: ${message ? message : faker.lorem.sentence()}`);

const rotation = (callback, timeout) => {
	const rotationFn = () => {
		callback();
		setTimeout(rotationFn, timeout || getRandomArbitrary(1000, 5000));
	};

	rotationFn();
};

let players;
let serverInitialized = false;
rotation(() => {
	if (serverInitialized) {
		triggerShutdown();
	}

	triggerInitGame(getServer(getMap()));
	serverInitialized = true;

	players = getPlayers();
	players.forEach(player => triggerConnection(player));
}, MAP_TIMEOUT);

rotation(() => {
	if (players.length > 1 && serverInitialized) {
		const attacker = getRandomFromArray(players);
		const target = getRandomFromArray(players);
		const weapon = getWeapon();
		if (attacker.initialized && target.initialized && weapon) {
			triggerKill(attacker, target, weapon);
			if (faker.random.boolean()) {
				triggerSay(attacker, ':D');
			}

			if (faker.random.boolean()) {
				triggerSay(target, ':(((');
			}
		}
	}
});

rotation(() => {
	if (players.length > 1 && serverInitialized) {
		const player = getRandomFromArray(players);
		if (player.initialized) {
			triggerSay(player);
		}
	}
});
