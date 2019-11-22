const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//const Pessoa = require('../model/Pessoa');
const AcertoEstoque = require('../model/acertoestoque');
const PedidosVenda = require('../model/pedidosvenda')  
const PedidosVendaProdutos = require('../model/pedidosvendaprodutos')
const Produtos = require('../model/produtos')

const connection = new Sequelize(dbConfig);

AcertoEstoque.init(connection);
PedidosVenda.init(connection);
PedidosVendaProdutos.init(connection);
Produtos.init(connection)
//Pessoa.associate(connection.models)

module.exports = connection;