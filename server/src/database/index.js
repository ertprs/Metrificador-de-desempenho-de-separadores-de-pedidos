const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//const Pessoa = require('../model/Pessoa');


const connection = new Sequelize(dbConfig);

//Pessoa.init(connection);

//Pessoa.associate(connection.models)

module.exports = connection;