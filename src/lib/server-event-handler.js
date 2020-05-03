const message = require('./message');
const {GENDER_NEUTER} = require('./constant/gender');

/**
 * @param data
 */
function parseDataString(data) {
	const result = {};
	data = data.split('\\');
	while (data.length) {
		const keyValue = data.splice(0, 2);
		result[keyValue[0]] = keyValue[1];
	}

	return result;
}

/**
 *
 */
function messageParts({
	attacker,
	target,
	attackerIndex,
	targetIndex,
	mod,
	gender
}) {
	const [x, msg1, y, msg2] = message(mod, attackerIndex, targetIndex, gender);
	const whoIsWho = index =>
		index && (index === attackerIndex ? attacker : target);

	return [whoIsWho(x), msg1, whoIsWho(y), msg2].filter(x => x);
}

const events = {
	init: {
		regExp: 'InitGame: \\\\(.+)',
		parser: ([data]) => parseDataString(data)
	},
	shutdown: {
		regExp: 'ShutdownGame:',
		parser: () => {}
	},
	connect: {
		regExp: 'ClientConnect: (\\d+) (.+) \\((.+)\\)',
		parser: ([playerIndex, player, ip]) => ({playerIndex, player, ip})
	},
	disconnect: {
		regExp: 'ClientDisconnect: (\\d+)',
		parser: ([playerIndex]) => ({playerIndex})
	},
	info: {
		regExp: 'ClientUserinfoChanged: (\\d+) (.+)',
		parser: ([playerIndex, data]) =>
			Object.assign({playerIndex}, parseDataString(data))
	},
	kill: {
		regExp: 'Kill: (\\d+) (\\d+) (\\d+) \\d+: (.+) killed (.+) by ([A-Z_]+)',
		parser: ([
			attackerIndex,
			targetIndex,
			modIndex,
			attacker,
			target,
			mod
		]) => ({
			attackerIndex,
			targetIndex,
			modIndex,
			attacker,
			target,
			mod,
			messageParts: messageParts({
				attackerIndex,
				targetIndex,
				modIndex,
				attacker,
				target,
				mod,
				gender: GENDER_NEUTER
			})
		})
	},
	message: {
		regExp: 'say: (\\d+) \\d+: ([^:]+): (.+)',
		parser: ([playerIndex, player, message]) => ({
			playerIndex,
			player,
			message
		})
	}
};

const lineParsers = [];

for (const event in events) {
	if (Object.prototype.hasOwnProperty.call(events, event)) {
		const {regExp, parser} = events[event];
		const evtRegExp = new RegExp(regExp);
		lineParsers.push(line => {
			if (evtRegExp.test(line)) {
				return {event, data: parser(line.match(evtRegExp).slice(1))};
			}
		});
	}
}

module.exports = line => {
	for (const lineParser of lineParsers) {
		const result = lineParser(line);
		if (result) {
			return result;
		}
	}

	return {event: 'unknown', data: {line}};
};
