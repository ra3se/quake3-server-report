const config = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, 'config.json'), {encoding: 'utf8'}));

module.exports = {
  development: config.database,
};
