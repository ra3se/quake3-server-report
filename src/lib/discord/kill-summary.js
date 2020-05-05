var table = require("markdown-table");
const stripColor = require("../strip-colors");

const onlyUnique = (value, index, self) => self.indexOf(value) === index;

module.exports = kills => {
	kills = kills.filter(
		({ attacker_index, target_index }) => attacker_index !== target_index
	);

	const killers = kills.reduce((result, { attacker }) => {
		result[attacker] = result[attacker] ? result[attacker] + 1 : 1;
		return result;
	}, {});

	const victims = kills.reduce((result, { target }) => {
		result[target] = result[target] ? result[target] + 1 : 1;
		return result;
	}, {});

	const participants = Object.keys(killers)
		.concat(Object.keys(victims))
		.filter(onlyUnique);

	return {
		title: "Scoreboard",
		description: `${"```markdown\n"}${table(
			[["Player", "Kills", "Deaths"]].concat(
				participants.map(player => [
					stripColor(player),
					killers[player] || 0,
					victims[player] || 0
				])
			)
		)}${"\n```"}`
	};
};
