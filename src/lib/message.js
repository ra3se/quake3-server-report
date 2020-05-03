/* eslint-disable complexity */

const WORLD = '<world>';

const {
	MOD_SUICIDE,
	MOD_FALLING,
	MOD_CRUSH,
	MOD_WATER,
	MOD_SLIME,
	MOD_LAVA,
	MOD_TARGET_LASER,
	MOD_TRIGGER_HURT
} = require('./constant/world-dmg');

const {
	GENDER_FEMALE,
	GENDER_NEUTER
} = require('./constant/gender');

const {
	MOD_GRAPPLE,
	MOD_GAUNTLET,
	MOD_MACHINEGUN,
	MOD_SHOTGUN,
	MOD_GRENADE,
	MOD_GRENADE_SPLASH,
	MOD_ROCKET,
	MOD_ROCKET_SPLASH,
	MOD_PLASMA,
	MOD_PLASMA_SPLASH,
	MOD_RAILGUN,
	MOD_LIGHTNING,
	MOD_BFG,
	MOD_BFG_SPLASH,
	MOD_NAIL,
	MOD_CHAINGUN,
	MOD_PROXIMITY_MINE,
	MOD_JUICED,
	MOD_TELEFRAG,
	MOD_KAMIKAZE
} = require('./constant/weapon-dmg');

/**
 * Return message parts when player dies
 *
 * @param {string} mod - Damage modifier
 * @param {int} attacker - Entity name who initiated damage
 * @param {int} target - Entity name who falls victim of damage
 * @param {string} gender - Entity gender
 * @returns {Array} Array of message parts
 */
module.exports = (mod, attacker, target, gender) => {
	let message = null;
	let message2 = null;

	if (target === WORLD) {
		return []; // No one targets world, silly.
	}

	switch (mod) {
		case MOD_SUICIDE:
			message = 'suicides';
			break;
		case MOD_FALLING:
			message = 'cratered';
			break;
		case MOD_CRUSH:
			message = 'was squished';
			break;
		case MOD_WATER:
			message = 'sank like a rock';
			break;
		case MOD_SLIME:
			message = 'melted';
			break;
		case MOD_LAVA:
			message = 'does a back flip into the lava';
			break;
		case MOD_TARGET_LASER:
			message = 'saw the light';
			break;
		case MOD_TRIGGER_HURT:
			message = 'was in the wrong place';
			break;
		default:
			message = null;
			break;
	}

	if (attacker === target) {
		switch (mod) {
			case MOD_KAMIKAZE:
				message = 'goes out with a bang';
				break;
			case MOD_GRENADE_SPLASH:
				if (gender === GENDER_FEMALE) {
					message = 'tripped on her own grenade';
				} else if (gender === GENDER_NEUTER) {
					message = 'tripped on its own grenade';
				} else {
					message = 'tripped on his own grenade';
				}

				break;
			case MOD_ROCKET_SPLASH:
				if (gender === GENDER_FEMALE) {
					message = 'blew herself up';
				} else if (gender === GENDER_NEUTER) {
					message = 'blew itself up';
				} else {
					message = 'blew himself up';
				}

				break;
			case MOD_PLASMA_SPLASH:
				if (gender === GENDER_FEMALE) {
					message = 'melted herself';
				} else if (gender === GENDER_NEUTER) {
					message = 'melted itself';
				} else {
					message = 'melted himself';
				}

				break;
			case MOD_BFG_SPLASH:
				message = 'should have used a smaller gun';
				break;
			case MOD_PROXIMITY_MINE:
				if (gender === GENDER_FEMALE) {
					message = 'found her prox mine';
				} else if (gender === GENDER_NEUTER) {
					message = 'found its prox mine';
				} else {
					message = 'found his prox mine';
				}

				break;
			default:
				if (gender === GENDER_FEMALE) {
					message = 'killed herself';
				} else if (gender === GENDER_NEUTER) {
					message = 'killed itself';
				} else {
					message = 'killed himself';
				}

				break;
		}
	}

	if (message) {
		return [target, message];
	}

	if (attacker !== WORLD) {
		switch (mod) {
			case MOD_GRAPPLE:
				message = 'was caught by';
				break;
			case MOD_GAUNTLET:
				message = 'was pummeled by';
				break;
			case MOD_MACHINEGUN:
				message = 'was machinegunned by';
				break;
			case MOD_SHOTGUN:
				message = 'was gunned down by';
				break;
			case MOD_GRENADE:
				message = 'ate';
				message2 = '\'s grenade';
				break;
			case MOD_GRENADE_SPLASH:
				message = 'was shredded by';
				message2 = '\'s shrapnel';
				break;
			case MOD_ROCKET:
				message = 'ate';
				message2 = '\'s rocket';
				break;
			case MOD_ROCKET_SPLASH:
				message = 'almost dodged';
				message2 = '\'s rocket';
				break;
			case MOD_PLASMA:
				message = 'was melted by';
				message2 = '\'s plasmagun';
				break;
			case MOD_PLASMA_SPLASH:
				message = 'was melted by';
				message2 = '\'s plasmagun';
				break;
			case MOD_RAILGUN:
				message = 'was railed by';
				break;
			case MOD_LIGHTNING:
				message = 'was electrocuted by';
				break;
			case MOD_BFG:
			case MOD_BFG_SPLASH:
				message = 'was blasted by';
				message2 = '\'s BFG';
				break;
			case MOD_NAIL:
				message = 'was nailed by';
				break;
			case MOD_CHAINGUN:
				message = 'got lead poisoning from';
				message2 = '\'s Chaingun';
				break;
			case MOD_PROXIMITY_MINE:
				message = 'was too close to';
				message2 = '\'s Prox Mine';
				break;
			case MOD_KAMIKAZE:
				message = 'falls to';
				message2 = '\'s Kamikaze blast';
				break;
			case MOD_JUICED:
				message = 'was juiced by';
				break;
			case MOD_TELEFRAG:
				message = 'tried to invade';
				message2 = '\'s personal space';
				break;
			default:
				message = 'was killed by';
				break;
		}
	}

	if (message) {
		return message2 ? [target, message, attacker, message2] : [target, message, attacker];
	}

	return [];
};
