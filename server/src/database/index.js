const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const PedidosVenda = require('../model/pedidosvenda')  ;
const PedidosVendaProdutos = require('../model/pedidosvendaprodutos');
const Produtos = require('../model/produtos');
const PedidosApi = require('../model/pedidosapi');
const ProdutosApi = require('../model/produtosapi')

const connection = new Sequelize(dbConfig);


PedidosVenda.init(connection);
PedidosVendaProdutos.init(connection);
Produtos.init(connection);
PedidosApi.init(connection);
ProdutosApi.init(connection);


module.exports = connection;