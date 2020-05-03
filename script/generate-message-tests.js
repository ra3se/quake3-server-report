const message = require('../src/lib/message');
const weaponDmg = require('../src/lib/constant/weapon-dmg');
const worldDmg = require('../src/lib/constant/world-dmg');
const genders = require('../src/lib/constant/gender');

const personsMale = ['Edison', 'Tesla'];
const personsFemale = ['Curie', 'Meitner'];
const personsNeutral = ['Electron', 'Protons'];

/**
 * @param arr
 */
function arrayToString(arr) {
	return (arr || []).map(item => `"${item}"`).join(', ');
}

/**
 * @param modifier
 * @param personA
 * @param personB
 * @param gender
 */
function output(modifier, personA, personB, gender) {
	console.log(`\t\to('${modifier} ${personA} ${personB} ${gender}', () =>
\t\t\to(message('${modifier}', '${personA}', '${personB}', '${gender}')).deepEquals([${arrayToString(message(modifier, personA, personB, gender))}]));`);
}

/**
 * @param modifier
 */
function theUltimateLoop(modifier) {
	for (const gender in genders) {
		if (Object.prototype.hasOwnProperty.call(genders, gender)) {
			const persons = gender === genders.GENDER_MALE ?
				personsMale : (gender === genders.GENDER_FEMALE ?
					personsFemale : personsNeutral);

			for (const personA of persons.concat('<world>')) {
				for (const personB of persons.concat('<world>')) {
					output(modifier, personA, personB, gender);
				}
			}
		}
	}
}

console.log(`const o = require('ospec');
const message = require('../../src/lib/message');
`);
console.log('o.spec(\'message\', () => {');

console.log('\to.spec(\'world damage\', () => {');
for (const modifier in worldDmg) {
	if (Object.prototype.hasOwnProperty.call(worldDmg, modifier)) {
		theUltimateLoop(modifier);
	}
}

console.log(`\t});
`);

console.log('\to.spec(\'weapon damage\', () => {');
for (const modifier in weaponDmg) {
	if (Object.prototype.hasOwnProperty.call(weaponDmg, modifier)) {
		theUltimateLoop(modifier);
	}
}

console.log(`\t});
`);

console.log('\to.spec(\'unknown modifier\', () => {');
theUltimateLoop('MOD_UNKNOWN');
console.log('\t});');

console.log(`});
`);

