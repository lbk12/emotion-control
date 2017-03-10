const Sequelize = require('sequelize');
const chalk = require('chalk')
const app = require('APP')
const name = app.name

const db = new Sequelize('postgres://localhost:5432/${name}', {
	logging: function(msg) {
		console.log('  SQL >> ', chalk.gray(msg), '\n')
	}
});

module.exports = db