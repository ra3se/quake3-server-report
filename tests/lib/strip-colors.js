const o = require('ospec');
const stripColors = require('../../src/lib/strip-colors');

o.spec('strip-colors', () => {
	o('should strip colors', () => o(stripColors('^1a^2b^3c')).equals('abc'));
});
