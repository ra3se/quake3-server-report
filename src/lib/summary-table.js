var Table = require("cli-table3");

const summaryTable = (rows, style = {}) => {
	var table = new Table({
		head: ["Player", "Kill", "Death", "K/D Ratio", "Score"],
		// head: ["Player", "Kill", "Death", "Score"],
		style: {
			border: style.border || "white",
			head: style.head || "white",
		},
		chars: {
			"top": "═",
			"top-mid": "╤",
			"top-left": "╔",
			"top-right": "╗",
			"bottom": "═",
			"bottom-mid": "╧",
			"bottom-left": "╚",
			"bottom-right": "╝",
			"left": "║",
			"left-mid": "╟",
			"mid": "─",
			"mid-mid": "┼",
			"right": "║",
			"right-mid": "╢",
			"middle": "│"
		}
	});

	rows.forEach(row => table.push(row));

	return table.toString();
};

module.exports = (state, colorFormatter, style) =>
	summaryTable(
		state.players
			.map(({ name, kills, deaths, score }) => [
				colorFormatter(name),
				kills,
				deaths,
				(kills/(deaths > 0 ? deaths : 1)).toPrecision(1),
				score
			]),
		style
	);
