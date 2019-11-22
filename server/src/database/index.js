const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//const Pessoa = require('../model/Pessoa');

const PedidosVenda = require('../model/pedidosvenda')  
const PedidosVendaProdutos = require('../model/pedidosvendaprodutos')
const Produtos = require('../model/produtos')

const connection = new Sequelize(dbConfig);


PedidosVenda.init(connection);
PedidosVendaProdutos.init(connection);
Produtos.init(connection)
//Pessoa.associate(connection.models)

module.exports = connection;