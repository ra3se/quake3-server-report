const o = require('ospec');
const message = require('../../src/lib/message');

o.spec('message', () => {
	o.spec('world damage', () => {
		o('MOD_SUICIDE Edison Edison GENDER_MALE', () =>
			o(message('MOD_SUICIDE', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_SUICIDE Edison Tesla GENDER_MALE', () =>
			o(message('MOD_SUICIDE', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'suicides']));
		o('MOD_SUICIDE Edison <world> GENDER_MALE', () =>
			o(message('MOD_SUICIDE', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_SUICIDE Tesla Edison GENDER_MALE', () =>
			o(message('MOD_SUICIDE', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'suicides']));
		o('MOD_SUICIDE Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_SUICIDE', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_SUICIDE Tesla <world> GENDER_MALE', () =>
			o(message('MOD_SUICIDE', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_SUICIDE <world> Edison GENDER_MALE', () =>
			o(message('MOD_SUICIDE', '<world>', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'suicides']));
		o('MOD_SUICIDE <world> Tesla GENDER_MALE', () =>
			o(message('MOD_SUICIDE', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'suicides']));
		o('MOD_SUICIDE <world> <world> GENDER_MALE', () =>
			o(message('MOD_SUICIDE', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_SUICIDE Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_SUICIDE', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_SUICIDE Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_SUICIDE', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'suicides']));
		o('MOD_SUICIDE Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_SUICIDE', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_SUICIDE Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_SUICIDE', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'suicides']));
		o('MOD_SUICIDE Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_SUICIDE', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_SUICIDE Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_SUICIDE', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_SUICIDE <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_SUICIDE', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'suicides']));
		o('MOD_SUICIDE <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_SUICIDE', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'suicides']));
		o('MOD_SUICIDE <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_SUICIDE', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_SUICIDE Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_SUICIDE', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_SUICIDE Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_SUICIDE', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'suicides']));
		o('MOD_SUICIDE Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_SUICIDE', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_SUICIDE Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_SUICIDE', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'suicides']));
		o('MOD_SUICIDE Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_SUICIDE', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_SUICIDE Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_SUICIDE', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_SUICIDE <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_SUICIDE', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'suicides']));
		o('MOD_SUICIDE <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_SUICIDE', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'suicides']));
		o('MOD_SUICIDE <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_SUICIDE', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_FALLING Edison Edison GENDER_MALE', () =>
			o(message('MOD_FALLING', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_FALLING Edison Tesla GENDER_MALE', () =>
			o(message('MOD_FALLING', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'cratered']));
		o('MOD_FALLING Edison <world> GENDER_MALE', () =>
			o(message('MOD_FALLING', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_FALLING Tesla Edison GENDER_MALE', () =>
			o(message('MOD_FALLING', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'cratered']));
		o('MOD_FALLING Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_FALLING', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_FALLING Tesla <world> GENDER_MALE', () =>
			o(message('MOD_FALLING', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_FALLING <world> Edison GENDER_MALE', () =>
			o(message('MOD_FALLING', '<world>', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'cratered']));
		o('MOD_FALLING <world> Tesla GENDER_MALE', () =>
			o(message('MOD_FALLING', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'cratered']));
		o('MOD_FALLING <world> <world> GENDER_MALE', () =>
			o(message('MOD_FALLING', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_FALLING Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_FALLING', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_FALLING Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_FALLING', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'cratered']));
		o('MOD_FALLING Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_FALLING', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_FALLING Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_FALLING', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'cratered']));
		o('MOD_FALLING Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_FALLING', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_FALLING Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_FALLING', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_FALLING <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_FALLING', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'cratered']));
		o('MOD_FALLING <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_FALLING', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'cratered']));
		o('MOD_FALLING <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_FALLING', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_FALLING Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_FALLING', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_FALLING Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_FALLING', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'cratered']));
		o('MOD_FALLING Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_FALLING', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_FALLING Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_FALLING', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'cratered']));
		o('MOD_FALLING Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_FALLING', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_FALLING Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_FALLING', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_FALLING <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_FALLING', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'cratered']));
		o('MOD_FALLING <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_FALLING', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'cratered']));
		o('MOD_FALLING <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_FALLING', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_CRUSH Edison Edison GENDER_MALE', () =>
			o(message('MOD_CRUSH', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_CRUSH Edison Tesla GENDER_MALE', () =>
			o(message('MOD_CRUSH', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was squished']));
		o('MOD_CRUSH Edison <world> GENDER_MALE', () =>
			o(message('MOD_CRUSH', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_CRUSH Tesla Edison GENDER_MALE', () =>
			o(message('MOD_CRUSH', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was squished']));
		o('MOD_CRUSH Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_CRUSH', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_CRUSH Tesla <world> GENDER_MALE', () =>
			o(message('MOD_CRUSH', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_CRUSH <world> Edison GENDER_MALE', () =>
			o(message('MOD_CRUSH', '<world>', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was squished']));
		o('MOD_CRUSH <world> Tesla GENDER_MALE', () =>
			o(message('MOD_CRUSH', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was squished']));
		o('MOD_CRUSH <world> <world> GENDER_MALE', () =>
			o(message('MOD_CRUSH', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_CRUSH Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_CRUSH', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_CRUSH Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_CRUSH', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was squished']));
		o('MOD_CRUSH Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_CRUSH', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_CRUSH Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_CRUSH', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was squished']));
		o('MOD_CRUSH Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_CRUSH', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_CRUSH Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_CRUSH', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_CRUSH <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_CRUSH', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was squished']));
		o('MOD_CRUSH <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_CRUSH', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was squished']));
		o('MOD_CRUSH <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_CRUSH', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_CRUSH Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_CRUSH', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_CRUSH Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_CRUSH', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was squished']));
		o('MOD_CRUSH Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_CRUSH', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_CRUSH Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_CRUSH', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was squished']));
		o('MOD_CRUSH Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_CRUSH', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_CRUSH Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_CRUSH', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_CRUSH <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_CRUSH', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was squished']));
		o('MOD_CRUSH <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_CRUSH', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was squished']));
		o('MOD_CRUSH <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_CRUSH', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_WATER Edison Edison GENDER_MALE', () =>
			o(message('MOD_WATER', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_WATER Edison Tesla GENDER_MALE', () =>
			o(message('MOD_WATER', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'sank like a rock']));
		o('MOD_WATER Edison <world> GENDER_MALE', () =>
			o(message('MOD_WATER', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_WATER Tesla Edison GENDER_MALE', () =>
			o(message('MOD_WATER', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'sank like a rock']));
		o('MOD_WATER Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_WATER', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_WATER Tesla <world> GENDER_MALE', () =>
			o(message('MOD_WATER', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_WATER <world> Edison GENDER_MALE', () =>
			o(message('MOD_WATER', '<world>', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'sank like a rock']));
		o('MOD_WATER <world> Tesla GENDER_MALE', () =>
			o(message('MOD_WATER', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'sank like a rock']));
		o('MOD_WATER <world> <world> GENDER_MALE', () =>
			o(message('MOD_WATER', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_WATER Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_WATER', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_WATER Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_WATER', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'sank like a rock']));
		o('MOD_WATER Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_WATER', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_WATER Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_WATER', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'sank like a rock']));
		o('MOD_WATER Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_WATER', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_WATER Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_WATER', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_WATER <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_WATER', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'sank like a rock']));
		o('MOD_WATER <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_WATER', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'sank like a rock']));
		o('MOD_WATER <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_WATER', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_WATER Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_WATER', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_WATER Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_WATER', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'sank like a rock']));
		o('MOD_WATER Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_WATER', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_WATER Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_WATER', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'sank like a rock']));
		o('MOD_WATER Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_WATER', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_WATER Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_WATER', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_WATER <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_WATER', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'sank like a rock']));
		o('MOD_WATER <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_WATER', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'sank like a rock']));
		o('MOD_WATER <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_WATER', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_SLIME Edison Edison GENDER_MALE', () =>
			o(message('MOD_SLIME', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_SLIME Edison Tesla GENDER_MALE', () =>
			o(message('MOD_SLIME', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'melted']));
		o('MOD_SLIME Edison <world> GENDER_MALE', () =>
			o(message('MOD_SLIME', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_SLIME Tesla Edison GENDER_MALE', () =>
			o(message('MOD_SLIME', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'melted']));
		o('MOD_SLIME Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_SLIME', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_SLIME Tesla <world> GENDER_MALE', () =>
			o(message('MOD_SLIME', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_SLIME <world> Edison GENDER_MALE', () =>
			o(message('MOD_SLIME', '<world>', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'melted']));
		o('MOD_SLIME <world> Tesla GENDER_MALE', () =>
			o(message('MOD_SLIME', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'melted']));
		o('MOD_SLIME <world> <world> GENDER_MALE', () =>
			o(message('MOD_SLIME', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_SLIME Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_SLIME', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_SLIME Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_SLIME', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'melted']));
		o('MOD_SLIME Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_SLIME', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_SLIME Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_SLIME', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'melted']));
		o('MOD_SLIME Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_SLIME', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_SLIME Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_SLIME', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_SLIME <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_SLIME', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'melted']));
		o('MOD_SLIME <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_SLIME', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'melted']));
		o('MOD_SLIME <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_SLIME', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_SLIME Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_SLIME', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_SLIME Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_SLIME', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'melted']));
		o('MOD_SLIME Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_SLIME', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_SLIME Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_SLIME', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'melted']));
		o('MOD_SLIME Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_SLIME', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_SLIME Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_SLIME', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_SLIME <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_SLIME', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'melted']));
		o('MOD_SLIME <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_SLIME', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'melted']));
		o('MOD_SLIME <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_SLIME', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_LAVA Edison Edison GENDER_MALE', () =>
			o(message('MOD_LAVA', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_LAVA Edison Tesla GENDER_MALE', () =>
			o(message('MOD_LAVA', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'does a back flip into the lava']));
		o('MOD_LAVA Edison <world> GENDER_MALE', () =>
			o(message('MOD_LAVA', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_LAVA Tesla Edison GENDER_MALE', () =>
			o(message('MOD_LAVA', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'does a back flip into the lava']));
		o('MOD_LAVA Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_LAVA', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_LAVA Tesla <world> GENDER_MALE', () =>
			o(message('MOD_LAVA', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_LAVA <world> Edison GENDER_MALE', () =>
			o(message('MOD_LAVA', '<world>', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'does a back flip into the lava']));
		o('MOD_LAVA <world> Tesla GENDER_MALE', () =>
			o(message('MOD_LAVA', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'does a back flip into the lava']));
		o('MOD_LAVA <world> <world> GENDER_MALE', () =>
			o(message('MOD_LAVA', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_LAVA Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_LAVA', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_LAVA Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_LAVA', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'does a back flip into the lava']));
		o('MOD_LAVA Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_LAVA', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_LAVA Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_LAVA', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'does a back flip into the lava']));
		o('MOD_LAVA Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_LAVA', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_LAVA Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_LAVA', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_LAVA <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_LAVA', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'does a back flip into the lava']));
		o('MOD_LAVA <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_LAVA', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'does a back flip into the lava']));
		o('MOD_LAVA <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_LAVA', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_LAVA Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_LAVA', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_LAVA Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_LAVA', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'does a back flip into the lava']));
		o('MOD_LAVA Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_LAVA', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_LAVA Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_LAVA', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'does a back flip into the lava']));
		o('MOD_LAVA Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_LAVA', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_LAVA Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_LAVA', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_LAVA <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_LAVA', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'does a back flip into the lava']));
		o('MOD_LAVA <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_LAVA', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'does a back flip into the lava']));
		o('MOD_LAVA <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_LAVA', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_TARGET_LASER Edison Edison GENDER_MALE', () =>
			o(message('MOD_TARGET_LASER', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_TARGET_LASER Edison Tesla GENDER_MALE', () =>
			o(message('MOD_TARGET_LASER', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'saw the light']));
		o('MOD_TARGET_LASER Edison <world> GENDER_MALE', () =>
			o(message('MOD_TARGET_LASER', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_TARGET_LASER Tesla Edison GENDER_MALE', () =>
			o(message('MOD_TARGET_LASER', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'saw the light']));
		o('MOD_TARGET_LASER Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_TARGET_LASER', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_TARGET_LASER Tesla <world> GENDER_MALE', () =>
			o(message('MOD_TARGET_LASER', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_TARGET_LASER <world> Edison GENDER_MALE', () =>
			o(message('MOD_TARGET_LASER', '<world>', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'saw the light']));
		o('MOD_TARGET_LASER <world> Tesla GENDER_MALE', () =>
			o(message('MOD_TARGET_LASER', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'saw the light']));
		o('MOD_TARGET_LASER <world> <world> GENDER_MALE', () =>
			o(message('MOD_TARGET_LASER', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_TARGET_LASER Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_TARGET_LASER', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_TARGET_LASER Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_TARGET_LASER', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'saw the light']));
		o('MOD_TARGET_LASER Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_TARGET_LASER', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_TARGET_LASER Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_TARGET_LASER', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'saw the light']));
		o('MOD_TARGET_LASER Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_TARGET_LASER', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_TARGET_LASER Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_TARGET_LASER', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_TARGET_LASER <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_TARGET_LASER', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'saw the light']));
		o('MOD_TARGET_LASER <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_TARGET_LASER', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'saw the light']));
		o('MOD_TARGET_LASER <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_TARGET_LASER', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_TARGET_LASER Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_TARGET_LASER', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_TARGET_LASER Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_TARGET_LASER', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'saw the light']));
		o('MOD_TARGET_LASER Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_TARGET_LASER', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_TARGET_LASER Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_TARGET_LASER', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'saw the light']));
		o('MOD_TARGET_LASER Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_TARGET_LASER', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_TARGET_LASER Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_TARGET_LASER', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_TARGET_LASER <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_TARGET_LASER', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'saw the light']));
		o('MOD_TARGET_LASER <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_TARGET_LASER', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'saw the light']));
		o('MOD_TARGET_LASER <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_TARGET_LASER', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_TRIGGER_HURT Edison Edison GENDER_MALE', () =>
			o(message('MOD_TRIGGER_HURT', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_TRIGGER_HURT Edison Tesla GENDER_MALE', () =>
			o(message('MOD_TRIGGER_HURT', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was in the wrong place']));
		o('MOD_TRIGGER_HURT Edison <world> GENDER_MALE', () =>
			o(message('MOD_TRIGGER_HURT', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_TRIGGER_HURT Tesla Edison GENDER_MALE', () =>
			o(message('MOD_TRIGGER_HURT', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was in the wrong place']));
		o('MOD_TRIGGER_HURT Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_TRIGGER_HURT', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_TRIGGER_HURT Tesla <world> GENDER_MALE', () =>
			o(message('MOD_TRIGGER_HURT', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_TRIGGER_HURT <world> Edison GENDER_MALE', () =>
			o(message('MOD_TRIGGER_HURT', '<world>', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was in the wrong place']));
		o('MOD_TRIGGER_HURT <world> Tesla GENDER_MALE', () =>
			o(message('MOD_TRIGGER_HURT', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was in the wrong place']));
		o('MOD_TRIGGER_HURT <world> <world> GENDER_MALE', () =>
			o(message('MOD_TRIGGER_HURT', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_TRIGGER_HURT Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_TRIGGER_HURT', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_TRIGGER_HURT Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_TRIGGER_HURT', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was in the wrong place']));
		o('MOD_TRIGGER_HURT Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_TRIGGER_HURT', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_TRIGGER_HURT Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_TRIGGER_HURT', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was in the wrong place']));
		o('MOD_TRIGGER_HURT Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_TRIGGER_HURT', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_TRIGGER_HURT Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_TRIGGER_HURT', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_TRIGGER_HURT <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_TRIGGER_HURT', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was in the wrong place']));
		o('MOD_TRIGGER_HURT <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_TRIGGER_HURT', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was in the wrong place']));
		o('MOD_TRIGGER_HURT <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_TRIGGER_HURT', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_TRIGGER_HURT Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_TRIGGER_HURT', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_TRIGGER_HURT Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_TRIGGER_HURT', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was in the wrong place']));
		o('MOD_TRIGGER_HURT Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_TRIGGER_HURT', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_TRIGGER_HURT Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_TRIGGER_HURT', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was in the wrong place']));
		o('MOD_TRIGGER_HURT Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_TRIGGER_HURT', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_TRIGGER_HURT Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_TRIGGER_HURT', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_TRIGGER_HURT <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_TRIGGER_HURT', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was in the wrong place']));
		o('MOD_TRIGGER_HURT <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_TRIGGER_HURT', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was in the wrong place']));
		o('MOD_TRIGGER_HURT <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_TRIGGER_HURT', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
	});

	o.spec('weapon damage', () => {
		o('MOD_GRAPPLE Edison Edison GENDER_MALE', () =>
			o(message('MOD_GRAPPLE', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_GRAPPLE Edison Tesla GENDER_MALE', () =>
			o(message('MOD_GRAPPLE', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was caught by', 'Edison']));
		o('MOD_GRAPPLE Edison <world> GENDER_MALE', () =>
			o(message('MOD_GRAPPLE', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRAPPLE Tesla Edison GENDER_MALE', () =>
			o(message('MOD_GRAPPLE', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was caught by', 'Tesla']));
		o('MOD_GRAPPLE Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_GRAPPLE', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_GRAPPLE Tesla <world> GENDER_MALE', () =>
			o(message('MOD_GRAPPLE', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRAPPLE <world> Edison GENDER_MALE', () =>
			o(message('MOD_GRAPPLE', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRAPPLE <world> Tesla GENDER_MALE', () =>
			o(message('MOD_GRAPPLE', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRAPPLE <world> <world> GENDER_MALE', () =>
			o(message('MOD_GRAPPLE', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRAPPLE Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_GRAPPLE', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_GRAPPLE Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_GRAPPLE', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was caught by', 'Curie']));
		o('MOD_GRAPPLE Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_GRAPPLE', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRAPPLE Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_GRAPPLE', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was caught by', 'Meitner']));
		o('MOD_GRAPPLE Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_GRAPPLE', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_GRAPPLE Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_GRAPPLE', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRAPPLE <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_GRAPPLE', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRAPPLE <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_GRAPPLE', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRAPPLE <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_GRAPPLE', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRAPPLE Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_GRAPPLE', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_GRAPPLE Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_GRAPPLE', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was caught by', 'Electron']));
		o('MOD_GRAPPLE Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_GRAPPLE', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRAPPLE Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_GRAPPLE', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was caught by', 'Protons']));
		o('MOD_GRAPPLE Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_GRAPPLE', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_GRAPPLE Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_GRAPPLE', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRAPPLE <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_GRAPPLE', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRAPPLE <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_GRAPPLE', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRAPPLE <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_GRAPPLE', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GAUNTLET Edison Edison GENDER_MALE', () =>
			o(message('MOD_GAUNTLET', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_GAUNTLET Edison Tesla GENDER_MALE', () =>
			o(message('MOD_GAUNTLET', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was pummeled by', 'Edison']));
		o('MOD_GAUNTLET Edison <world> GENDER_MALE', () =>
			o(message('MOD_GAUNTLET', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GAUNTLET Tesla Edison GENDER_MALE', () =>
			o(message('MOD_GAUNTLET', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was pummeled by', 'Tesla']));
		o('MOD_GAUNTLET Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_GAUNTLET', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_GAUNTLET Tesla <world> GENDER_MALE', () =>
			o(message('MOD_GAUNTLET', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GAUNTLET <world> Edison GENDER_MALE', () =>
			o(message('MOD_GAUNTLET', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GAUNTLET <world> Tesla GENDER_MALE', () =>
			o(message('MOD_GAUNTLET', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GAUNTLET <world> <world> GENDER_MALE', () =>
			o(message('MOD_GAUNTLET', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GAUNTLET Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_GAUNTLET', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_GAUNTLET Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_GAUNTLET', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was pummeled by', 'Curie']));
		o('MOD_GAUNTLET Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_GAUNTLET', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GAUNTLET Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_GAUNTLET', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was pummeled by', 'Meitner']));
		o('MOD_GAUNTLET Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_GAUNTLET', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_GAUNTLET Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_GAUNTLET', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GAUNTLET <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_GAUNTLET', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GAUNTLET <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_GAUNTLET', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GAUNTLET <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_GAUNTLET', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GAUNTLET Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_GAUNTLET', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_GAUNTLET Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_GAUNTLET', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was pummeled by', 'Electron']));
		o('MOD_GAUNTLET Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_GAUNTLET', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GAUNTLET Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_GAUNTLET', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was pummeled by', 'Protons']));
		o('MOD_GAUNTLET Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_GAUNTLET', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_GAUNTLET Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_GAUNTLET', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GAUNTLET <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_GAUNTLET', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GAUNTLET <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_GAUNTLET', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GAUNTLET <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_GAUNTLET', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_MACHINEGUN Edison Edison GENDER_MALE', () =>
			o(message('MOD_MACHINEGUN', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_MACHINEGUN Edison Tesla GENDER_MALE', () =>
			o(message('MOD_MACHINEGUN', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was machinegunned by', 'Edison']));
		o('MOD_MACHINEGUN Edison <world> GENDER_MALE', () =>
			o(message('MOD_MACHINEGUN', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_MACHINEGUN Tesla Edison GENDER_MALE', () =>
			o(message('MOD_MACHINEGUN', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was machinegunned by', 'Tesla']));
		o('MOD_MACHINEGUN Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_MACHINEGUN', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_MACHINEGUN Tesla <world> GENDER_MALE', () =>
			o(message('MOD_MACHINEGUN', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_MACHINEGUN <world> Edison GENDER_MALE', () =>
			o(message('MOD_MACHINEGUN', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_MACHINEGUN <world> Tesla GENDER_MALE', () =>
			o(message('MOD_MACHINEGUN', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_MACHINEGUN <world> <world> GENDER_MALE', () =>
			o(message('MOD_MACHINEGUN', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_MACHINEGUN Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_MACHINEGUN', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_MACHINEGUN Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_MACHINEGUN', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was machinegunned by', 'Curie']));
		o('MOD_MACHINEGUN Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_MACHINEGUN', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_MACHINEGUN Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_MACHINEGUN', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was machinegunned by', 'Meitner']));
		o('MOD_MACHINEGUN Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_MACHINEGUN', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_MACHINEGUN Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_MACHINEGUN', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_MACHINEGUN <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_MACHINEGUN', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_MACHINEGUN <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_MACHINEGUN', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_MACHINEGUN <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_MACHINEGUN', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_MACHINEGUN Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_MACHINEGUN', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_MACHINEGUN Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_MACHINEGUN', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was machinegunned by', 'Electron']));
		o('MOD_MACHINEGUN Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_MACHINEGUN', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_MACHINEGUN Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_MACHINEGUN', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was machinegunned by', 'Protons']));
		o('MOD_MACHINEGUN Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_MACHINEGUN', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_MACHINEGUN Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_MACHINEGUN', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_MACHINEGUN <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_MACHINEGUN', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_MACHINEGUN <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_MACHINEGUN', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_MACHINEGUN <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_MACHINEGUN', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_SHOTGUN Edison Edison GENDER_MALE', () =>
			o(message('MOD_SHOTGUN', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_SHOTGUN Edison Tesla GENDER_MALE', () =>
			o(message('MOD_SHOTGUN', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was gunned down by', 'Edison']));
		o('MOD_SHOTGUN Edison <world> GENDER_MALE', () =>
			o(message('MOD_SHOTGUN', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_SHOTGUN Tesla Edison GENDER_MALE', () =>
			o(message('MOD_SHOTGUN', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was gunned down by', 'Tesla']));
		o('MOD_SHOTGUN Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_SHOTGUN', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_SHOTGUN Tesla <world> GENDER_MALE', () =>
			o(message('MOD_SHOTGUN', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_SHOTGUN <world> Edison GENDER_MALE', () =>
			o(message('MOD_SHOTGUN', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_SHOTGUN <world> Tesla GENDER_MALE', () =>
			o(message('MOD_SHOTGUN', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_SHOTGUN <world> <world> GENDER_MALE', () =>
			o(message('MOD_SHOTGUN', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_SHOTGUN Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_SHOTGUN', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_SHOTGUN Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_SHOTGUN', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was gunned down by', 'Curie']));
		o('MOD_SHOTGUN Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_SHOTGUN', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_SHOTGUN Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_SHOTGUN', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was gunned down by', 'Meitner']));
		o('MOD_SHOTGUN Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_SHOTGUN', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_SHOTGUN Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_SHOTGUN', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_SHOTGUN <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_SHOTGUN', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_SHOTGUN <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_SHOTGUN', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_SHOTGUN <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_SHOTGUN', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_SHOTGUN Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_SHOTGUN', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_SHOTGUN Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_SHOTGUN', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was gunned down by', 'Electron']));
		o('MOD_SHOTGUN Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_SHOTGUN', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_SHOTGUN Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_SHOTGUN', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was gunned down by', 'Protons']));
		o('MOD_SHOTGUN Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_SHOTGUN', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_SHOTGUN Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_SHOTGUN', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_SHOTGUN <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_SHOTGUN', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_SHOTGUN <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_SHOTGUN', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_SHOTGUN <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_SHOTGUN', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRENADE Edison Edison GENDER_MALE', () =>
			o(message('MOD_GRENADE', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_GRENADE Edison Tesla GENDER_MALE', () =>
			o(message('MOD_GRENADE', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'ate', 'Edison', '\'s grenade']));
		o('MOD_GRENADE Edison <world> GENDER_MALE', () =>
			o(message('MOD_GRENADE', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRENADE Tesla Edison GENDER_MALE', () =>
			o(message('MOD_GRENADE', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'ate', 'Tesla', '\'s grenade']));
		o('MOD_GRENADE Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_GRENADE', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_GRENADE Tesla <world> GENDER_MALE', () =>
			o(message('MOD_GRENADE', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRENADE <world> Edison GENDER_MALE', () =>
			o(message('MOD_GRENADE', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRENADE <world> Tesla GENDER_MALE', () =>
			o(message('MOD_GRENADE', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRENADE <world> <world> GENDER_MALE', () =>
			o(message('MOD_GRENADE', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRENADE Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_GRENADE', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_GRENADE Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_GRENADE', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'ate', 'Curie', '\'s grenade']));
		o('MOD_GRENADE Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_GRENADE', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRENADE Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_GRENADE', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'ate', 'Meitner', '\'s grenade']));
		o('MOD_GRENADE Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_GRENADE', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_GRENADE Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_GRENADE', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRENADE <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_GRENADE', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRENADE <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_GRENADE', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRENADE <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_GRENADE', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRENADE Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_GRENADE', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_GRENADE Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_GRENADE', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'ate', 'Electron', '\'s grenade']));
		o('MOD_GRENADE Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_GRENADE', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRENADE Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_GRENADE', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'ate', 'Protons', '\'s grenade']));
		o('MOD_GRENADE Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_GRENADE', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_GRENADE Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_GRENADE', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRENADE <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_GRENADE', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRENADE <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_GRENADE', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRENADE <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_GRENADE', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRENADE_SPLASH Edison Edison GENDER_MALE', () =>
			o(message('MOD_GRENADE_SPLASH', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'tripped on his own grenade']));
		o('MOD_GRENADE_SPLASH Edison Tesla GENDER_MALE', () =>
			o(message('MOD_GRENADE_SPLASH', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was shredded by', 'Edison', '\'s shrapnel']));
		o('MOD_GRENADE_SPLASH Edison <world> GENDER_MALE', () =>
			o(message('MOD_GRENADE_SPLASH', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRENADE_SPLASH Tesla Edison GENDER_MALE', () =>
			o(message('MOD_GRENADE_SPLASH', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was shredded by', 'Tesla', '\'s shrapnel']));
		o('MOD_GRENADE_SPLASH Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_GRENADE_SPLASH', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'tripped on his own grenade']));
		o('MOD_GRENADE_SPLASH Tesla <world> GENDER_MALE', () =>
			o(message('MOD_GRENADE_SPLASH', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRENADE_SPLASH <world> Edison GENDER_MALE', () =>
			o(message('MOD_GRENADE_SPLASH', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRENADE_SPLASH <world> Tesla GENDER_MALE', () =>
			o(message('MOD_GRENADE_SPLASH', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRENADE_SPLASH <world> <world> GENDER_MALE', () =>
			o(message('MOD_GRENADE_SPLASH', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_GRENADE_SPLASH Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_GRENADE_SPLASH', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'tripped on her own grenade']));
		o('MOD_GRENADE_SPLASH Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_GRENADE_SPLASH', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was shredded by', 'Curie', '\'s shrapnel']));
		o('MOD_GRENADE_SPLASH Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_GRENADE_SPLASH', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRENADE_SPLASH Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_GRENADE_SPLASH', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was shredded by', 'Meitner', '\'s shrapnel']));
		o('MOD_GRENADE_SPLASH Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_GRENADE_SPLASH', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'tripped on her own grenade']));
		o('MOD_GRENADE_SPLASH Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_GRENADE_SPLASH', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRENADE_SPLASH <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_GRENADE_SPLASH', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRENADE_SPLASH <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_GRENADE_SPLASH', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRENADE_SPLASH <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_GRENADE_SPLASH', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_GRENADE_SPLASH Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_GRENADE_SPLASH', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'tripped on its own grenade']));
		o('MOD_GRENADE_SPLASH Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_GRENADE_SPLASH', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was shredded by', 'Electron', '\'s shrapnel']));
		o('MOD_GRENADE_SPLASH Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_GRENADE_SPLASH', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRENADE_SPLASH Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_GRENADE_SPLASH', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was shredded by', 'Protons', '\'s shrapnel']));
		o('MOD_GRENADE_SPLASH Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_GRENADE_SPLASH', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'tripped on its own grenade']));
		o('MOD_GRENADE_SPLASH Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_GRENADE_SPLASH', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRENADE_SPLASH <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_GRENADE_SPLASH', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRENADE_SPLASH <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_GRENADE_SPLASH', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_GRENADE_SPLASH <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_GRENADE_SPLASH', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_ROCKET Edison Edison GENDER_MALE', () =>
			o(message('MOD_ROCKET', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_ROCKET Edison Tesla GENDER_MALE', () =>
			o(message('MOD_ROCKET', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'ate', 'Edison', '\'s rocket']));
		o('MOD_ROCKET Edison <world> GENDER_MALE', () =>
			o(message('MOD_ROCKET', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_ROCKET Tesla Edison GENDER_MALE', () =>
			o(message('MOD_ROCKET', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'ate', 'Tesla', '\'s rocket']));
		o('MOD_ROCKET Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_ROCKET', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_ROCKET Tesla <world> GENDER_MALE', () =>
			o(message('MOD_ROCKET', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_ROCKET <world> Edison GENDER_MALE', () =>
			o(message('MOD_ROCKET', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_ROCKET <world> Tesla GENDER_MALE', () =>
			o(message('MOD_ROCKET', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_ROCKET <world> <world> GENDER_MALE', () =>
			o(message('MOD_ROCKET', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_ROCKET Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_ROCKET', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_ROCKET Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_ROCKET', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'ate', 'Curie', '\'s rocket']));
		o('MOD_ROCKET Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_ROCKET', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_ROCKET Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_ROCKET', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'ate', 'Meitner', '\'s rocket']));
		o('MOD_ROCKET Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_ROCKET', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_ROCKET Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_ROCKET', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_ROCKET <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_ROCKET', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_ROCKET <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_ROCKET', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_ROCKET <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_ROCKET', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_ROCKET Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_ROCKET', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_ROCKET Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_ROCKET', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'ate', 'Electron', '\'s rocket']));
		o('MOD_ROCKET Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_ROCKET', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_ROCKET Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_ROCKET', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'ate', 'Protons', '\'s rocket']));
		o('MOD_ROCKET Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_ROCKET', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_ROCKET Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_ROCKET', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_ROCKET <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_ROCKET', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_ROCKET <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_ROCKET', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_ROCKET <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_ROCKET', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_ROCKET_SPLASH Edison Edison GENDER_MALE', () =>
			o(message('MOD_ROCKET_SPLASH', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'blew himself up']));
		o('MOD_ROCKET_SPLASH Edison Tesla GENDER_MALE', () =>
			o(message('MOD_ROCKET_SPLASH', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'almost dodged', 'Edison', '\'s rocket']));
		o('MOD_ROCKET_SPLASH Edison <world> GENDER_MALE', () =>
			o(message('MOD_ROCKET_SPLASH', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_ROCKET_SPLASH Tesla Edison GENDER_MALE', () =>
			o(message('MOD_ROCKET_SPLASH', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'almost dodged', 'Tesla', '\'s rocket']));
		o('MOD_ROCKET_SPLASH Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_ROCKET_SPLASH', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'blew himself up']));
		o('MOD_ROCKET_SPLASH Tesla <world> GENDER_MALE', () =>
			o(message('MOD_ROCKET_SPLASH', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_ROCKET_SPLASH <world> Edison GENDER_MALE', () =>
			o(message('MOD_ROCKET_SPLASH', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_ROCKET_SPLASH <world> Tesla GENDER_MALE', () =>
			o(message('MOD_ROCKET_SPLASH', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_ROCKET_SPLASH <world> <world> GENDER_MALE', () =>
			o(message('MOD_ROCKET_SPLASH', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_ROCKET_SPLASH Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_ROCKET_SPLASH', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'blew herself up']));
		o('MOD_ROCKET_SPLASH Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_ROCKET_SPLASH', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'almost dodged', 'Curie', '\'s rocket']));
		o('MOD_ROCKET_SPLASH Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_ROCKET_SPLASH', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_ROCKET_SPLASH Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_ROCKET_SPLASH', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'almost dodged', 'Meitner', '\'s rocket']));
		o('MOD_ROCKET_SPLASH Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_ROCKET_SPLASH', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'blew herself up']));
		o('MOD_ROCKET_SPLASH Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_ROCKET_SPLASH', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_ROCKET_SPLASH <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_ROCKET_SPLASH', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_ROCKET_SPLASH <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_ROCKET_SPLASH', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_ROCKET_SPLASH <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_ROCKET_SPLASH', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_ROCKET_SPLASH Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_ROCKET_SPLASH', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'blew itself up']));
		o('MOD_ROCKET_SPLASH Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_ROCKET_SPLASH', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'almost dodged', 'Electron', '\'s rocket']));
		o('MOD_ROCKET_SPLASH Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_ROCKET_SPLASH', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_ROCKET_SPLASH Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_ROCKET_SPLASH', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'almost dodged', 'Protons', '\'s rocket']));
		o('MOD_ROCKET_SPLASH Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_ROCKET_SPLASH', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'blew itself up']));
		o('MOD_ROCKET_SPLASH Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_ROCKET_SPLASH', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_ROCKET_SPLASH <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_ROCKET_SPLASH', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_ROCKET_SPLASH <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_ROCKET_SPLASH', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_ROCKET_SPLASH <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_ROCKET_SPLASH', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PLASMA Edison Edison GENDER_MALE', () =>
			o(message('MOD_PLASMA', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_PLASMA Edison Tesla GENDER_MALE', () =>
			o(message('MOD_PLASMA', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was melted by', 'Edison', '\'s plasmagun']));
		o('MOD_PLASMA Edison <world> GENDER_MALE', () =>
			o(message('MOD_PLASMA', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PLASMA Tesla Edison GENDER_MALE', () =>
			o(message('MOD_PLASMA', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was melted by', 'Tesla', '\'s plasmagun']));
		o('MOD_PLASMA Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_PLASMA', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_PLASMA Tesla <world> GENDER_MALE', () =>
			o(message('MOD_PLASMA', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PLASMA <world> Edison GENDER_MALE', () =>
			o(message('MOD_PLASMA', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PLASMA <world> Tesla GENDER_MALE', () =>
			o(message('MOD_PLASMA', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PLASMA <world> <world> GENDER_MALE', () =>
			o(message('MOD_PLASMA', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PLASMA Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_PLASMA', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_PLASMA Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_PLASMA', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was melted by', 'Curie', '\'s plasmagun']));
		o('MOD_PLASMA Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_PLASMA', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PLASMA Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_PLASMA', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was melted by', 'Meitner', '\'s plasmagun']));
		o('MOD_PLASMA Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_PLASMA', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_PLASMA Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_PLASMA', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PLASMA <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_PLASMA', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PLASMA <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_PLASMA', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PLASMA <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_PLASMA', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PLASMA Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_PLASMA', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_PLASMA Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_PLASMA', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was melted by', 'Electron', '\'s plasmagun']));
		o('MOD_PLASMA Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_PLASMA', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PLASMA Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_PLASMA', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was melted by', 'Protons', '\'s plasmagun']));
		o('MOD_PLASMA Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_PLASMA', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_PLASMA Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_PLASMA', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PLASMA <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_PLASMA', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PLASMA <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_PLASMA', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PLASMA <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_PLASMA', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PLASMA_SPLASH Edison Edison GENDER_MALE', () =>
			o(message('MOD_PLASMA_SPLASH', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'melted himself']));
		o('MOD_PLASMA_SPLASH Edison Tesla GENDER_MALE', () =>
			o(message('MOD_PLASMA_SPLASH', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was melted by', 'Edison', '\'s plasmagun']));
		o('MOD_PLASMA_SPLASH Edison <world> GENDER_MALE', () =>
			o(message('MOD_PLASMA_SPLASH', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PLASMA_SPLASH Tesla Edison GENDER_MALE', () =>
			o(message('MOD_PLASMA_SPLASH', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was melted by', 'Tesla', '\'s plasmagun']));
		o('MOD_PLASMA_SPLASH Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_PLASMA_SPLASH', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'melted himself']));
		o('MOD_PLASMA_SPLASH Tesla <world> GENDER_MALE', () =>
			o(message('MOD_PLASMA_SPLASH', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PLASMA_SPLASH <world> Edison GENDER_MALE', () =>
			o(message('MOD_PLASMA_SPLASH', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PLASMA_SPLASH <world> Tesla GENDER_MALE', () =>
			o(message('MOD_PLASMA_SPLASH', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PLASMA_SPLASH <world> <world> GENDER_MALE', () =>
			o(message('MOD_PLASMA_SPLASH', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PLASMA_SPLASH Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_PLASMA_SPLASH', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'melted herself']));
		o('MOD_PLASMA_SPLASH Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_PLASMA_SPLASH', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was melted by', 'Curie', '\'s plasmagun']));
		o('MOD_PLASMA_SPLASH Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_PLASMA_SPLASH', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PLASMA_SPLASH Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_PLASMA_SPLASH', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was melted by', 'Meitner', '\'s plasmagun']));
		o('MOD_PLASMA_SPLASH Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_PLASMA_SPLASH', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'melted herself']));
		o('MOD_PLASMA_SPLASH Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_PLASMA_SPLASH', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PLASMA_SPLASH <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_PLASMA_SPLASH', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PLASMA_SPLASH <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_PLASMA_SPLASH', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PLASMA_SPLASH <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_PLASMA_SPLASH', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PLASMA_SPLASH Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_PLASMA_SPLASH', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'melted itself']));
		o('MOD_PLASMA_SPLASH Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_PLASMA_SPLASH', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was melted by', 'Electron', '\'s plasmagun']));
		o('MOD_PLASMA_SPLASH Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_PLASMA_SPLASH', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PLASMA_SPLASH Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_PLASMA_SPLASH', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was melted by', 'Protons', '\'s plasmagun']));
		o('MOD_PLASMA_SPLASH Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_PLASMA_SPLASH', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'melted itself']));
		o('MOD_PLASMA_SPLASH Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_PLASMA_SPLASH', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PLASMA_SPLASH <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_PLASMA_SPLASH', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PLASMA_SPLASH <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_PLASMA_SPLASH', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PLASMA_SPLASH <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_PLASMA_SPLASH', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_RAILGUN Edison Edison GENDER_MALE', () =>
			o(message('MOD_RAILGUN', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_RAILGUN Edison Tesla GENDER_MALE', () =>
			o(message('MOD_RAILGUN', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was railed by', 'Edison']));
		o('MOD_RAILGUN Edison <world> GENDER_MALE', () =>
			o(message('MOD_RAILGUN', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_RAILGUN Tesla Edison GENDER_MALE', () =>
			o(message('MOD_RAILGUN', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was railed by', 'Tesla']));
		o('MOD_RAILGUN Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_RAILGUN', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_RAILGUN Tesla <world> GENDER_MALE', () =>
			o(message('MOD_RAILGUN', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_RAILGUN <world> Edison GENDER_MALE', () =>
			o(message('MOD_RAILGUN', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_RAILGUN <world> Tesla GENDER_MALE', () =>
			o(message('MOD_RAILGUN', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_RAILGUN <world> <world> GENDER_MALE', () =>
			o(message('MOD_RAILGUN', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_RAILGUN Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_RAILGUN', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_RAILGUN Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_RAILGUN', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was railed by', 'Curie']));
		o('MOD_RAILGUN Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_RAILGUN', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_RAILGUN Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_RAILGUN', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was railed by', 'Meitner']));
		o('MOD_RAILGUN Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_RAILGUN', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_RAILGUN Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_RAILGUN', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_RAILGUN <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_RAILGUN', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_RAILGUN <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_RAILGUN', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_RAILGUN <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_RAILGUN', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_RAILGUN Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_RAILGUN', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_RAILGUN Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_RAILGUN', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was railed by', 'Electron']));
		o('MOD_RAILGUN Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_RAILGUN', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_RAILGUN Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_RAILGUN', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was railed by', 'Protons']));
		o('MOD_RAILGUN Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_RAILGUN', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_RAILGUN Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_RAILGUN', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_RAILGUN <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_RAILGUN', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_RAILGUN <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_RAILGUN', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_RAILGUN <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_RAILGUN', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_LIGHTNING Edison Edison GENDER_MALE', () =>
			o(message('MOD_LIGHTNING', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_LIGHTNING Edison Tesla GENDER_MALE', () =>
			o(message('MOD_LIGHTNING', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was electrocuted by', 'Edison']));
		o('MOD_LIGHTNING Edison <world> GENDER_MALE', () =>
			o(message('MOD_LIGHTNING', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_LIGHTNING Tesla Edison GENDER_MALE', () =>
			o(message('MOD_LIGHTNING', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was electrocuted by', 'Tesla']));
		o('MOD_LIGHTNING Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_LIGHTNING', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_LIGHTNING Tesla <world> GENDER_MALE', () =>
			o(message('MOD_LIGHTNING', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_LIGHTNING <world> Edison GENDER_MALE', () =>
			o(message('MOD_LIGHTNING', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_LIGHTNING <world> Tesla GENDER_MALE', () =>
			o(message('MOD_LIGHTNING', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_LIGHTNING <world> <world> GENDER_MALE', () =>
			o(message('MOD_LIGHTNING', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_LIGHTNING Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_LIGHTNING', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_LIGHTNING Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_LIGHTNING', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was electrocuted by', 'Curie']));
		o('MOD_LIGHTNING Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_LIGHTNING', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_LIGHTNING Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_LIGHTNING', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was electrocuted by', 'Meitner']));
		o('MOD_LIGHTNING Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_LIGHTNING', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_LIGHTNING Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_LIGHTNING', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_LIGHTNING <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_LIGHTNING', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_LIGHTNING <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_LIGHTNING', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_LIGHTNING <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_LIGHTNING', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_LIGHTNING Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_LIGHTNING', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_LIGHTNING Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_LIGHTNING', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was electrocuted by', 'Electron']));
		o('MOD_LIGHTNING Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_LIGHTNING', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_LIGHTNING Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_LIGHTNING', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was electrocuted by', 'Protons']));
		o('MOD_LIGHTNING Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_LIGHTNING', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_LIGHTNING Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_LIGHTNING', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_LIGHTNING <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_LIGHTNING', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_LIGHTNING <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_LIGHTNING', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_LIGHTNING <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_LIGHTNING', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_BFG Edison Edison GENDER_MALE', () =>
			o(message('MOD_BFG', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_BFG Edison Tesla GENDER_MALE', () =>
			o(message('MOD_BFG', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was blasted by', 'Edison', '\'s BFG']));
		o('MOD_BFG Edison <world> GENDER_MALE', () =>
			o(message('MOD_BFG', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_BFG Tesla Edison GENDER_MALE', () =>
			o(message('MOD_BFG', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was blasted by', 'Tesla', '\'s BFG']));
		o('MOD_BFG Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_BFG', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_BFG Tesla <world> GENDER_MALE', () =>
			o(message('MOD_BFG', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_BFG <world> Edison GENDER_MALE', () =>
			o(message('MOD_BFG', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_BFG <world> Tesla GENDER_MALE', () =>
			o(message('MOD_BFG', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_BFG <world> <world> GENDER_MALE', () =>
			o(message('MOD_BFG', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_BFG Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_BFG', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_BFG Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_BFG', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was blasted by', 'Curie', '\'s BFG']));
		o('MOD_BFG Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_BFG', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_BFG Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_BFG', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was blasted by', 'Meitner', '\'s BFG']));
		o('MOD_BFG Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_BFG', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_BFG Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_BFG', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_BFG <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_BFG', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_BFG <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_BFG', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_BFG <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_BFG', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_BFG Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_BFG', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_BFG Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_BFG', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was blasted by', 'Electron', '\'s BFG']));
		o('MOD_BFG Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_BFG', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_BFG Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_BFG', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was blasted by', 'Protons', '\'s BFG']));
		o('MOD_BFG Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_BFG', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_BFG Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_BFG', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_BFG <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_BFG', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_BFG <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_BFG', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_BFG <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_BFG', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_BFG_SPLASH Edison Edison GENDER_MALE', () =>
			o(message('MOD_BFG_SPLASH', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'should have used a smaller gun']));
		o('MOD_BFG_SPLASH Edison Tesla GENDER_MALE', () =>
			o(message('MOD_BFG_SPLASH', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was blasted by', 'Edison', '\'s BFG']));
		o('MOD_BFG_SPLASH Edison <world> GENDER_MALE', () =>
			o(message('MOD_BFG_SPLASH', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_BFG_SPLASH Tesla Edison GENDER_MALE', () =>
			o(message('MOD_BFG_SPLASH', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was blasted by', 'Tesla', '\'s BFG']));
		o('MOD_BFG_SPLASH Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_BFG_SPLASH', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'should have used a smaller gun']));
		o('MOD_BFG_SPLASH Tesla <world> GENDER_MALE', () =>
			o(message('MOD_BFG_SPLASH', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_BFG_SPLASH <world> Edison GENDER_MALE', () =>
			o(message('MOD_BFG_SPLASH', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_BFG_SPLASH <world> Tesla GENDER_MALE', () =>
			o(message('MOD_BFG_SPLASH', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_BFG_SPLASH <world> <world> GENDER_MALE', () =>
			o(message('MOD_BFG_SPLASH', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_BFG_SPLASH Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_BFG_SPLASH', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'should have used a smaller gun']));
		o('MOD_BFG_SPLASH Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_BFG_SPLASH', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was blasted by', 'Curie', '\'s BFG']));
		o('MOD_BFG_SPLASH Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_BFG_SPLASH', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_BFG_SPLASH Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_BFG_SPLASH', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was blasted by', 'Meitner', '\'s BFG']));
		o('MOD_BFG_SPLASH Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_BFG_SPLASH', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'should have used a smaller gun']));
		o('MOD_BFG_SPLASH Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_BFG_SPLASH', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_BFG_SPLASH <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_BFG_SPLASH', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_BFG_SPLASH <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_BFG_SPLASH', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_BFG_SPLASH <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_BFG_SPLASH', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_BFG_SPLASH Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_BFG_SPLASH', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'should have used a smaller gun']));
		o('MOD_BFG_SPLASH Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_BFG_SPLASH', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was blasted by', 'Electron', '\'s BFG']));
		o('MOD_BFG_SPLASH Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_BFG_SPLASH', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_BFG_SPLASH Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_BFG_SPLASH', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was blasted by', 'Protons', '\'s BFG']));
		o('MOD_BFG_SPLASH Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_BFG_SPLASH', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'should have used a smaller gun']));
		o('MOD_BFG_SPLASH Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_BFG_SPLASH', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_BFG_SPLASH <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_BFG_SPLASH', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_BFG_SPLASH <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_BFG_SPLASH', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_BFG_SPLASH <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_BFG_SPLASH', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_NAIL Edison Edison GENDER_MALE', () =>
			o(message('MOD_NAIL', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_NAIL Edison Tesla GENDER_MALE', () =>
			o(message('MOD_NAIL', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was nailed by', 'Edison']));
		o('MOD_NAIL Edison <world> GENDER_MALE', () =>
			o(message('MOD_NAIL', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_NAIL Tesla Edison GENDER_MALE', () =>
			o(message('MOD_NAIL', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was nailed by', 'Tesla']));
		o('MOD_NAIL Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_NAIL', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_NAIL Tesla <world> GENDER_MALE', () =>
			o(message('MOD_NAIL', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_NAIL <world> Edison GENDER_MALE', () =>
			o(message('MOD_NAIL', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_NAIL <world> Tesla GENDER_MALE', () =>
			o(message('MOD_NAIL', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_NAIL <world> <world> GENDER_MALE', () =>
			o(message('MOD_NAIL', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_NAIL Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_NAIL', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_NAIL Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_NAIL', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was nailed by', 'Curie']));
		o('MOD_NAIL Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_NAIL', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_NAIL Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_NAIL', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was nailed by', 'Meitner']));
		o('MOD_NAIL Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_NAIL', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_NAIL Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_NAIL', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_NAIL <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_NAIL', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_NAIL <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_NAIL', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_NAIL <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_NAIL', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_NAIL Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_NAIL', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_NAIL Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_NAIL', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was nailed by', 'Electron']));
		o('MOD_NAIL Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_NAIL', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_NAIL Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_NAIL', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was nailed by', 'Protons']));
		o('MOD_NAIL Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_NAIL', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_NAIL Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_NAIL', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_NAIL <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_NAIL', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_NAIL <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_NAIL', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_NAIL <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_NAIL', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_CHAINGUN Edison Edison GENDER_MALE', () =>
			o(message('MOD_CHAINGUN', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_CHAINGUN Edison Tesla GENDER_MALE', () =>
			o(message('MOD_CHAINGUN', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'got lead poisoning from', 'Edison', '\'s Chaingun']));
		o('MOD_CHAINGUN Edison <world> GENDER_MALE', () =>
			o(message('MOD_CHAINGUN', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_CHAINGUN Tesla Edison GENDER_MALE', () =>
			o(message('MOD_CHAINGUN', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'got lead poisoning from', 'Tesla', '\'s Chaingun']));
		o('MOD_CHAINGUN Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_CHAINGUN', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_CHAINGUN Tesla <world> GENDER_MALE', () =>
			o(message('MOD_CHAINGUN', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_CHAINGUN <world> Edison GENDER_MALE', () =>
			o(message('MOD_CHAINGUN', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_CHAINGUN <world> Tesla GENDER_MALE', () =>
			o(message('MOD_CHAINGUN', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_CHAINGUN <world> <world> GENDER_MALE', () =>
			o(message('MOD_CHAINGUN', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_CHAINGUN Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_CHAINGUN', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_CHAINGUN Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_CHAINGUN', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'got lead poisoning from', 'Curie', '\'s Chaingun']));
		o('MOD_CHAINGUN Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_CHAINGUN', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_CHAINGUN Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_CHAINGUN', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'got lead poisoning from', 'Meitner', '\'s Chaingun']));
		o('MOD_CHAINGUN Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_CHAINGUN', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_CHAINGUN Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_CHAINGUN', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_CHAINGUN <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_CHAINGUN', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_CHAINGUN <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_CHAINGUN', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_CHAINGUN <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_CHAINGUN', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_CHAINGUN Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_CHAINGUN', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_CHAINGUN Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_CHAINGUN', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'got lead poisoning from', 'Electron', '\'s Chaingun']));
		o('MOD_CHAINGUN Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_CHAINGUN', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_CHAINGUN Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_CHAINGUN', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'got lead poisoning from', 'Protons', '\'s Chaingun']));
		o('MOD_CHAINGUN Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_CHAINGUN', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_CHAINGUN Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_CHAINGUN', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_CHAINGUN <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_CHAINGUN', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_CHAINGUN <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_CHAINGUN', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_CHAINGUN <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_CHAINGUN', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PROXIMITY_MINE Edison Edison GENDER_MALE', () =>
			o(message('MOD_PROXIMITY_MINE', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'found his prox mine']));
		o('MOD_PROXIMITY_MINE Edison Tesla GENDER_MALE', () =>
			o(message('MOD_PROXIMITY_MINE', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was too close to', 'Edison', '\'s Prox Mine']));
		o('MOD_PROXIMITY_MINE Edison <world> GENDER_MALE', () =>
			o(message('MOD_PROXIMITY_MINE', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PROXIMITY_MINE Tesla Edison GENDER_MALE', () =>
			o(message('MOD_PROXIMITY_MINE', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was too close to', 'Tesla', '\'s Prox Mine']));
		o('MOD_PROXIMITY_MINE Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_PROXIMITY_MINE', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'found his prox mine']));
		o('MOD_PROXIMITY_MINE Tesla <world> GENDER_MALE', () =>
			o(message('MOD_PROXIMITY_MINE', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PROXIMITY_MINE <world> Edison GENDER_MALE', () =>
			o(message('MOD_PROXIMITY_MINE', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PROXIMITY_MINE <world> Tesla GENDER_MALE', () =>
			o(message('MOD_PROXIMITY_MINE', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PROXIMITY_MINE <world> <world> GENDER_MALE', () =>
			o(message('MOD_PROXIMITY_MINE', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_PROXIMITY_MINE Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_PROXIMITY_MINE', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'found her prox mine']));
		o('MOD_PROXIMITY_MINE Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_PROXIMITY_MINE', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was too close to', 'Curie', '\'s Prox Mine']));
		o('MOD_PROXIMITY_MINE Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_PROXIMITY_MINE', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PROXIMITY_MINE Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_PROXIMITY_MINE', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was too close to', 'Meitner', '\'s Prox Mine']));
		o('MOD_PROXIMITY_MINE Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_PROXIMITY_MINE', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'found her prox mine']));
		o('MOD_PROXIMITY_MINE Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_PROXIMITY_MINE', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PROXIMITY_MINE <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_PROXIMITY_MINE', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PROXIMITY_MINE <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_PROXIMITY_MINE', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PROXIMITY_MINE <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_PROXIMITY_MINE', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_PROXIMITY_MINE Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_PROXIMITY_MINE', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'found its prox mine']));
		o('MOD_PROXIMITY_MINE Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_PROXIMITY_MINE', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was too close to', 'Electron', '\'s Prox Mine']));
		o('MOD_PROXIMITY_MINE Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_PROXIMITY_MINE', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PROXIMITY_MINE Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_PROXIMITY_MINE', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was too close to', 'Protons', '\'s Prox Mine']));
		o('MOD_PROXIMITY_MINE Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_PROXIMITY_MINE', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'found its prox mine']));
		o('MOD_PROXIMITY_MINE Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_PROXIMITY_MINE', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PROXIMITY_MINE <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_PROXIMITY_MINE', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PROXIMITY_MINE <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_PROXIMITY_MINE', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_PROXIMITY_MINE <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_PROXIMITY_MINE', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_JUICED Edison Edison GENDER_MALE', () =>
			o(message('MOD_JUICED', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_JUICED Edison Tesla GENDER_MALE', () =>
			o(message('MOD_JUICED', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was juiced by', 'Edison']));
		o('MOD_JUICED Edison <world> GENDER_MALE', () =>
			o(message('MOD_JUICED', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_JUICED Tesla Edison GENDER_MALE', () =>
			o(message('MOD_JUICED', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was juiced by', 'Tesla']));
		o('MOD_JUICED Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_JUICED', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_JUICED Tesla <world> GENDER_MALE', () =>
			o(message('MOD_JUICED', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_JUICED <world> Edison GENDER_MALE', () =>
			o(message('MOD_JUICED', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_JUICED <world> Tesla GENDER_MALE', () =>
			o(message('MOD_JUICED', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_JUICED <world> <world> GENDER_MALE', () =>
			o(message('MOD_JUICED', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_JUICED Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_JUICED', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_JUICED Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_JUICED', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was juiced by', 'Curie']));
		o('MOD_JUICED Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_JUICED', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_JUICED Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_JUICED', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was juiced by', 'Meitner']));
		o('MOD_JUICED Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_JUICED', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_JUICED Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_JUICED', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_JUICED <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_JUICED', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_JUICED <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_JUICED', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_JUICED <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_JUICED', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_JUICED Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_JUICED', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_JUICED Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_JUICED', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was juiced by', 'Electron']));
		o('MOD_JUICED Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_JUICED', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_JUICED Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_JUICED', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was juiced by', 'Protons']));
		o('MOD_JUICED Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_JUICED', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_JUICED Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_JUICED', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_JUICED <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_JUICED', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_JUICED <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_JUICED', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_JUICED <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_JUICED', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_TELEFRAG Edison Edison GENDER_MALE', () =>
			o(message('MOD_TELEFRAG', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_TELEFRAG Edison Tesla GENDER_MALE', () =>
			o(message('MOD_TELEFRAG', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'tried to invade', 'Edison', '\'s personal space']));
		o('MOD_TELEFRAG Edison <world> GENDER_MALE', () =>
			o(message('MOD_TELEFRAG', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_TELEFRAG Tesla Edison GENDER_MALE', () =>
			o(message('MOD_TELEFRAG', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'tried to invade', 'Tesla', '\'s personal space']));
		o('MOD_TELEFRAG Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_TELEFRAG', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_TELEFRAG Tesla <world> GENDER_MALE', () =>
			o(message('MOD_TELEFRAG', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_TELEFRAG <world> Edison GENDER_MALE', () =>
			o(message('MOD_TELEFRAG', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_TELEFRAG <world> Tesla GENDER_MALE', () =>
			o(message('MOD_TELEFRAG', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_TELEFRAG <world> <world> GENDER_MALE', () =>
			o(message('MOD_TELEFRAG', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_TELEFRAG Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_TELEFRAG', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_TELEFRAG Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_TELEFRAG', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'tried to invade', 'Curie', '\'s personal space']));
		o('MOD_TELEFRAG Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_TELEFRAG', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_TELEFRAG Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_TELEFRAG', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'tried to invade', 'Meitner', '\'s personal space']));
		o('MOD_TELEFRAG Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_TELEFRAG', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_TELEFRAG Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_TELEFRAG', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_TELEFRAG <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_TELEFRAG', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_TELEFRAG <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_TELEFRAG', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_TELEFRAG <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_TELEFRAG', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_TELEFRAG Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_TELEFRAG', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_TELEFRAG Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_TELEFRAG', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'tried to invade', 'Electron', '\'s personal space']));
		o('MOD_TELEFRAG Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_TELEFRAG', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_TELEFRAG Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_TELEFRAG', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'tried to invade', 'Protons', '\'s personal space']));
		o('MOD_TELEFRAG Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_TELEFRAG', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_TELEFRAG Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_TELEFRAG', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_TELEFRAG <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_TELEFRAG', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_TELEFRAG <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_TELEFRAG', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_TELEFRAG <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_TELEFRAG', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_KAMIKAZE Edison Edison GENDER_MALE', () =>
			o(message('MOD_KAMIKAZE', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'goes out with a bang']));
		o('MOD_KAMIKAZE Edison Tesla GENDER_MALE', () =>
			o(message('MOD_KAMIKAZE', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'falls to', 'Edison', '\'s Kamikaze blast']));
		o('MOD_KAMIKAZE Edison <world> GENDER_MALE', () =>
			o(message('MOD_KAMIKAZE', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_KAMIKAZE Tesla Edison GENDER_MALE', () =>
			o(message('MOD_KAMIKAZE', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'falls to', 'Tesla', '\'s Kamikaze blast']));
		o('MOD_KAMIKAZE Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_KAMIKAZE', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'goes out with a bang']));
		o('MOD_KAMIKAZE Tesla <world> GENDER_MALE', () =>
			o(message('MOD_KAMIKAZE', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_KAMIKAZE <world> Edison GENDER_MALE', () =>
			o(message('MOD_KAMIKAZE', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_KAMIKAZE <world> Tesla GENDER_MALE', () =>
			o(message('MOD_KAMIKAZE', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_KAMIKAZE <world> <world> GENDER_MALE', () =>
			o(message('MOD_KAMIKAZE', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_KAMIKAZE Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_KAMIKAZE', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'goes out with a bang']));
		o('MOD_KAMIKAZE Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_KAMIKAZE', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'falls to', 'Curie', '\'s Kamikaze blast']));
		o('MOD_KAMIKAZE Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_KAMIKAZE', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_KAMIKAZE Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_KAMIKAZE', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'falls to', 'Meitner', '\'s Kamikaze blast']));
		o('MOD_KAMIKAZE Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_KAMIKAZE', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'goes out with a bang']));
		o('MOD_KAMIKAZE Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_KAMIKAZE', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_KAMIKAZE <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_KAMIKAZE', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_KAMIKAZE <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_KAMIKAZE', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_KAMIKAZE <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_KAMIKAZE', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_KAMIKAZE Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_KAMIKAZE', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'goes out with a bang']));
		o('MOD_KAMIKAZE Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_KAMIKAZE', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'falls to', 'Electron', '\'s Kamikaze blast']));
		o('MOD_KAMIKAZE Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_KAMIKAZE', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_KAMIKAZE Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_KAMIKAZE', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'falls to', 'Protons', '\'s Kamikaze blast']));
		o('MOD_KAMIKAZE Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_KAMIKAZE', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'goes out with a bang']));
		o('MOD_KAMIKAZE Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_KAMIKAZE', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_KAMIKAZE <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_KAMIKAZE', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_KAMIKAZE <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_KAMIKAZE', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_KAMIKAZE <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_KAMIKAZE', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
	});

	o.spec('unknown modifier', () => {
		o('MOD_UNKNOWN Edison Edison GENDER_MALE', () =>
			o(message('MOD_UNKNOWN', 'Edison', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'killed himself']));
		o('MOD_UNKNOWN Edison Tesla GENDER_MALE', () =>
			o(message('MOD_UNKNOWN', 'Edison', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'was killed by', 'Edison']));
		o('MOD_UNKNOWN Edison <world> GENDER_MALE', () =>
			o(message('MOD_UNKNOWN', 'Edison', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_UNKNOWN Tesla Edison GENDER_MALE', () =>
			o(message('MOD_UNKNOWN', 'Tesla', 'Edison', 'GENDER_MALE')).deepEquals(['Edison', 'was killed by', 'Tesla']));
		o('MOD_UNKNOWN Tesla Tesla GENDER_MALE', () =>
			o(message('MOD_UNKNOWN', 'Tesla', 'Tesla', 'GENDER_MALE')).deepEquals(['Tesla', 'killed himself']));
		o('MOD_UNKNOWN Tesla <world> GENDER_MALE', () =>
			o(message('MOD_UNKNOWN', 'Tesla', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_UNKNOWN <world> Edison GENDER_MALE', () =>
			o(message('MOD_UNKNOWN', '<world>', 'Edison', 'GENDER_MALE')).deepEquals([]));
		o('MOD_UNKNOWN <world> Tesla GENDER_MALE', () =>
			o(message('MOD_UNKNOWN', '<world>', 'Tesla', 'GENDER_MALE')).deepEquals([]));
		o('MOD_UNKNOWN <world> <world> GENDER_MALE', () =>
			o(message('MOD_UNKNOWN', '<world>', '<world>', 'GENDER_MALE')).deepEquals([]));
		o('MOD_UNKNOWN Curie Curie GENDER_FEMALE', () =>
			o(message('MOD_UNKNOWN', 'Curie', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'killed herself']));
		o('MOD_UNKNOWN Curie Meitner GENDER_FEMALE', () =>
			o(message('MOD_UNKNOWN', 'Curie', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'was killed by', 'Curie']));
		o('MOD_UNKNOWN Curie <world> GENDER_FEMALE', () =>
			o(message('MOD_UNKNOWN', 'Curie', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_UNKNOWN Meitner Curie GENDER_FEMALE', () =>
			o(message('MOD_UNKNOWN', 'Meitner', 'Curie', 'GENDER_FEMALE')).deepEquals(['Curie', 'was killed by', 'Meitner']));
		o('MOD_UNKNOWN Meitner Meitner GENDER_FEMALE', () =>
			o(message('MOD_UNKNOWN', 'Meitner', 'Meitner', 'GENDER_FEMALE')).deepEquals(['Meitner', 'killed herself']));
		o('MOD_UNKNOWN Meitner <world> GENDER_FEMALE', () =>
			o(message('MOD_UNKNOWN', 'Meitner', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_UNKNOWN <world> Curie GENDER_FEMALE', () =>
			o(message('MOD_UNKNOWN', '<world>', 'Curie', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_UNKNOWN <world> Meitner GENDER_FEMALE', () =>
			o(message('MOD_UNKNOWN', '<world>', 'Meitner', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_UNKNOWN <world> <world> GENDER_FEMALE', () =>
			o(message('MOD_UNKNOWN', '<world>', '<world>', 'GENDER_FEMALE')).deepEquals([]));
		o('MOD_UNKNOWN Electron Electron GENDER_NEUTER', () =>
			o(message('MOD_UNKNOWN', 'Electron', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'killed itself']));
		o('MOD_UNKNOWN Electron Protons GENDER_NEUTER', () =>
			o(message('MOD_UNKNOWN', 'Electron', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'was killed by', 'Electron']));
		o('MOD_UNKNOWN Electron <world> GENDER_NEUTER', () =>
			o(message('MOD_UNKNOWN', 'Electron', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_UNKNOWN Protons Electron GENDER_NEUTER', () =>
			o(message('MOD_UNKNOWN', 'Protons', 'Electron', 'GENDER_NEUTER')).deepEquals(['Electron', 'was killed by', 'Protons']));
		o('MOD_UNKNOWN Protons Protons GENDER_NEUTER', () =>
			o(message('MOD_UNKNOWN', 'Protons', 'Protons', 'GENDER_NEUTER')).deepEquals(['Protons', 'killed itself']));
		o('MOD_UNKNOWN Protons <world> GENDER_NEUTER', () =>
			o(message('MOD_UNKNOWN', 'Protons', '<world>', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_UNKNOWN <world> Electron GENDER_NEUTER', () =>
			o(message('MOD_UNKNOWN', '<world>', 'Electron', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_UNKNOWN <world> Protons GENDER_NEUTER', () =>
			o(message('MOD_UNKNOWN', '<world>', 'Protons', 'GENDER_NEUTER')).deepEquals([]));
		o('MOD_UNKNOWN <world> <world> GENDER_NEUTER', () =>
			o(message('MOD_UNKNOWN', '<world>', '<world>', 'GENDER_NEUTER')).deepEquals([]));
	});
});

