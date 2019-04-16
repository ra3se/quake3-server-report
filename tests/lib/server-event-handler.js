const o = require('ospec');
const serverEventHandler = require('../../src/lib/server-event-handler');

o('unknown', () => {
	const {event, data} = serverEventHandler('Some random line');

	o(event).equals('unknown');
	o(data).deepEquals({line: 'Some random line'});
});

o('init', () => {
	const {event, data} = serverEventHandler('InitGame: \\sv_dlURL\\ra3.lorio.se/game\\sv_allowDownload\\1\\capturelimit\\8\\g_maxGameClients\\0\\sv_maxclients\\16\\timelimit\\30\\fraglimit\\0\\dmflags\\0\\sv_hostname\\Super Best Friends\\sv_minRate\\0\\sv_maxRate\\0\\sv_dlRate\\100\\sv_minPing\\0\\sv_maxPing\\0\\sv_floodProtect\\0\\version\\ioq3 1.36+u20160122+dfsg1-1/Ubuntu linux-x86 Jan 22 2016\\com_gamename\\Quake3Arena\\com_protocol\\71\\g_gametype\\8\\mapname\\ra3map20\\sv_privateClients\\0\\location\\0\\gamename\\arena\\g_needpass\\0\\g_version\\RA3 1.76a Feb  3 2006 22:55:45\\g_timeLeft\\27');

	o(event).equals('init');
	/* eslint-disable camelcase */
	o(data).deepEquals({
		sv_dlURL: 'ra3.lorio.se/game',
		sv_allowDownload: '1',
		capturelimit: '8',
		g_maxGameClients: '0',
		sv_maxclients: '16',
		timelimit: '30',
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
		mapname: 'ra3map20',
		sv_privateClients: '0',
		location: '0',
		gamename: 'arena',
		g_needpass: '0',
		g_version: 'RA3 1.76a Feb  3 2006 22:55:45',
		g_timeLeft: '27'
	});
	/* eslint-enable camelcase */
});

o('shutdown', () => {
	const {event, data} = serverEventHandler('ShutdownGame:');

	o(event).equals('shutdown');
	o(data).equals(undefined);
});

o('connect', () => {
	const {event, data} = serverEventHandler('ClientConnect: 0 ^0k^3h4^0rma^3! (127.0.0.1)');

	o(event).equals('connect');
	o(data).deepEquals({
		playerIndex: '0',
		player: '^0k^3h4^0rma^3!',
		ip: '127.0.0.1'
	});
});

o('disconnect', () => {
	const {event, data} = serverEventHandler('ClientDisconnect: 0');

	o(event).equals('disconnect');
	o(data).deepEquals({
		playerIndex: '0'
	});
});

o('info', () => {
	const {event, data} = serverEventHandler('ClientUserinfoChanged: 0 n\\InsiPopinsi\\t\\5954957\\rt\\5954957\\model\\doom/default\\c1\\4\\c2\\5\\hc\\100\\w\\0\\l\\0\\a\\0\\ec\\1051');

	o(event).equals('info');
	o(data).deepEquals({
		playerIndex: '0',
		n: 'InsiPopinsi',
		t: '5954957',
		rt: '5954957',
		model: 'doom/default',
		c1: '4',
		c2: '5',
		hc: '100',
		w: '0',
		l: '0',
		a: '0',
		ec: '1051'
	});
});

o.spec('kill', () => {
	o('Player kill', () => {
		const {event, data} = serverEventHandler('Kill: 1 0 10 4: Shizu killed ^1K^7orroz by MOD_RAILGUN');

		o(event).equals('kill');
		o(data).deepEquals({
			attackerIndex: '1',
			targetIndex: '0',
			modIndex: '10',
			attacker: 'Shizu',
			target: '^1K^7orroz',
			mod: 'MOD_RAILGUN',
			messageParts: ['^1K^7orroz', 'was railed by', 'Shizu']
		});
	});

	o('World death', () => {
		const {event, data} = serverEventHandler('Kill: 1022 0 19 2: <world> killed ^1K^7orroz by MOD_FALLING');

		o(event).equals('kill');
		o(data).deepEquals({
			attackerIndex: '1022',
			targetIndex: '0',
			modIndex: '19',
			attacker: '<world>',
			target: '^1K^7orroz',
			mod: 'MOD_FALLING',
			messageParts: ['^1K^7orroz', 'cratered']
		});
	});
});

o('message', () => {
	const {event, data} = serverEventHandler('say: 0 2: Ketch: nostalgi');

	o(event).equals('message');
	o(data).deepEquals({playerIndex: '0', player: 'Ketch', message: 'nostalgi'});
});
