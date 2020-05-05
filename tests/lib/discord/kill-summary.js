const o = require('ospec');
const discordKillSummary = require("../../../src/lib/discord/kill-summary")

const killEvents = [
  {
    id: 64,
    attacker: '^0Steel',
    target: '^6W^4o^4od^5e^4n',
    weapon: 'MOD_MACHINEGUN',
    attacker_index: 4,
    target_index: 1,
    created_at: '2020-05-04 23:44:05'
  },
  {
    id: 65,
    attacker: '^6W^4o^4od^5e^4n',
    target: '^0Steel',
    weapon: 'MOD_RAILGUN',
    attacker_index: 1,
    target_index: 4,
    created_at: '2020-05-04 23:44:09'
  },
  {
    id: 66,
    attacker: 'R^0u^4b^0be^6r',
    target: 'R^0u^4b^0be^6r',
    weapon: 'MOD_GRENADE',
    attacker_index: 6,
    target_index: 6,
    created_at: '2020-05-04 23:44:12'
  },
  {
    id: 67,
    attacker: '^0Steel',
    target: 'F^4roze^1n',
    weapon: 'MOD_SHOTGUN',
    attacker_index: 4,
    target_index: 7,
    created_at: '2020-05-04 23:44:17'
  },
  {
    id: 68,
    attacker: '^1F^6r^2oz^5en',
    target: '^6W^4o^4od^5e^4n',
    weapon: 'MOD_TELEFRAG',
    attacker_index: 3,
    target_index: 1,
    created_at: '2020-05-04 23:44:21'
  },
  {
    id: 69,
    attacker: 'F^6r^0esh',
    target: '^0Steel',
    weapon: 'MOD_GAUNTLET',
    attacker_index: 2,
    target_index: 4,
    created_at: '2020-05-04 23:44:25'
  },
  {
    id: 70,
    attacker: 'R^0u^4b^0be^6r',
    target: 'R^0u^4b^0be^6r',
    weapon: 'MOD_SHOTGUN',
    attacker_index: 6,
    target_index: 6,
    created_at: '2020-05-04 23:44:30'
  }
]

o.spec('strip-colors', () => {
	o('Should return embedded rich kill summary', () => o(discordKillSummary(killEvents)).deepEquals({
		title: 'Scoreboard',
		description: '```markdown\n' +
			'| Player | Kills | Deaths |\n' +
			'| ------ | ----- | ------ |\n' +
			'| Steel  | 2     | 2      |\n' +
			'| Wooden | 1     | 2      |\n' +
			'| Frozen | 1     | 0      |\n' +
			'| Fresh  | 1     | 0      |\n' +
			'| Frozen | 0     | 1      |\n' +
			'```'
	}));
});
