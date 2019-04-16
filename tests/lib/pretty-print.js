const o = require('ospec');
const chalk = require('chalk');
const prettyPrint = require('../../src/lib/pretty-print');

o.spec('colors', () => {
	o('default', () => {
		o(prettyPrint('')).equals(chalk.white());
	});

	o('black', () => {
		o(prettyPrint('^0black')).equals(chalk.black('black'));
	});

	o('red', () => {
		o(prettyPrint('^1red')).equals(chalk.red('red'));
	});

	o('green', () => {
		o(prettyPrint('^2green')).equals(chalk.green('green'));
	});

	o('yellow', () => {
		o(prettyPrint('^3yellow')).equals(chalk.yellow('yellow'));
	});

	o('blue', () => {
		o(prettyPrint('^4blue')).equals(chalk.blue('blue'));
	});

	o('cyan', () => {
		o(prettyPrint('^5cyan')).equals(chalk.cyan('cyan'));
	});

	o('pink', () => {
		o(prettyPrint('^6pink')).equals(chalk.magenta('pink'));
	});

	o('white', () => {
		o(prettyPrint('^7white')).equals(chalk.white('white'));
	});
});
