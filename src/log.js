// const Tail = require('tail').Tail;
const process = require("process");
const EventEmitter = require("events");
const {inspect} = require("util");
const es = require("event-stream");
const worldDamage = require("./lib/world");

const date = "\\[(\\d{2}:\\d{2}:\\d{2})\\]";
const defaultParser = ([date]) => {date};
const worldDamageRegExp = worldDamage.reduce((result, val, index) =>
	result += `${(index > 0 ? "|" : "")}MOD_(${val})`,"");

function parseDataString(data) {
	const result = {};
	data = data.split("\\");
	while (data.length) {
		const keyValue = data.splice(0,2);
		result[keyValue[0]] = keyValue[1];
	}
	return result;
}

const events = {
	init: {
		regExp: "InitGame: \\\\(.+)",
		parser: ([data]) => Object.assign(parseDataString(data), {date}),
	},
	shutdown: {
		regExp: "ShutdownGame:",
	},
	connected: {
		regExp: "ClientConnect: (\\d+) ([^\\s]+)",
		parser: ([index, player]) =>
			({player, index}),
	},
	kill: {
		regExp: "Kill: \\d+ \\d+ \\d+ \\d+: ([^\\s]+) killed ([^\\s]+) by MOD_([A-Z_]+)",
		parser: ([killer, victim, weapon]) =>
			({killer, victim, weapon}),
	},
	killed: {
		regExp: `Kill: \\d+ \\d+ \\d+ \\d+: <world> killed ([^\\s]+) by ${worldDamageRegExp}`,
		parser: ([victim, damage]) => ({victim, damage}),
	},
	say: {
		regExp: "say: \\d+ \\d+: ([^:]+): (.+)",
		parser: ([player, message]) =>
			({player, message}),
	},
};

module.exports = function() {
	const emitter = new EventEmitter();
	const eventHandlers = Object.keys(events).map((key) => {
		const event = events[key];
		const evtRegExp = new RegExp(`^${event.regExp}`);
		const parser = event.parser || defaultParser;

		return function(line) {
			if (evtRegExp.test(line)) {
				const data = parser(line.match(evtRegExp).slice(1));
				console.log("emitting:", key, data);
				emitter.emit(key, data);
				return data;
			}
		}
	});

	process.stdin.setEncoding("utf8");

	// process.stdin.on('readable', () => {
	//     const chunk = process.stdin.read();
	//     if (chunk !== null) {
	//         process.stdout.write(`data: ${chunk}`);

	//         eventHandlers.forEach(evtHandler => evtHandler(chunk));
	//     }
	// });

	process.stdin
		.pipe(es.split())
		.pipe(es.map((line, cb) => {
			const result = eventHandlers.map((evtHandler) => evtHandler(line))
				.filter((val) => val);

			if (result.length) {
				return cb(null, inspect(result[0]));
			}
			return null
		}))
		.pipe(process.stdout);

	process.stdin.on("end", () => {
		process.stdout.write("end");
	});

	return emitter;
}

// module.exports = function(file) {
//     tail = new Tail(file);

//     tail.on('line', (data) => {
//         for (const key in events) {
//             if (events.hasOwnProperty(key)) {
//                 const event = events[key];
//                 const evtRegExp = new RegExp(`^${date} ${event.regExp}`);
//                 const parser = event.parser || defaultParser;

//                 if (evtRegExp.test(data)) {
//                     tail.emit(key, parser(data.match(evtRegExp).slice(1)));
//                 }
//             }
//         }
//     });

//     tail.on("error", function(error) {
//         console.log('ERROR: ', error);
//     });

//     return tail;
// }
