const chalk = require('chalk');

const colorMap = [
	chalk.black,		// 0: Black.
	chalk.red,			// 1: Red.
	chalk.green,		// 2: Green.
	chalk.yellow,		// 3: Yellow.
	chalk.blue,			// 4: Blue.
	chalk.cyan,			// 5: Cyan.
	chalk.magenta,		// 6: Pink.
	chalk.white			// 7: White.
];

/**
 * Apply quake like colors to line of text
 *
 * @param {string} line - line of text to convert
 * @returns {string} Line with ansi colors
 */
module.exports = function () {
	const args = [...arguments];
	const colorMatch = /(\^\d{1})/g;
	const line = args.reduce((previus, current) => {
		return previus + (current ? current : '');
	}, '');

	return line.split(colorMatch)
		.reverse().reduce((result, part) => {
			if (part.match(colorMatch)) {
				const colorIndex = parseInt(part.replace('^', ''), 10) % colorMap.length;
				const color = colorMap[colorIndex];
				return color(result);
			}

			return part + result;
		}, '');
};
