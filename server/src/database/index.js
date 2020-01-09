const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

// CONFIGURAÇÃO DO BANCO DE DADOS 2(NOSSO BD)
const dbConfig2 = require('../config/nDatabase')

const PedidosVenda = require('../model/pedidosvenda')  ;
const PedidosVendaProdutos = require('../model/pedidosvendaprodutos');
const Produtos = require('../model/produtos');
const PedidosApi = require('../model/pedidosapi');
const ProdutosApi = require('../model/produtosapi')

const DadosAPImetrica = require('../model/DadosAPImetrica')
const authuser = require('../model/authuser');

const connection = new Sequelize(dbConfig);
const connection2 = new Sequelize(dbConfig2)

PedidosVenda.init(connection);
PedidosVendaProdutos.init(connection);
Produtos.init(connection);
PedidosApi.init(connection);
ProdutosApi.init(connection);

DadosAPImetrica.init(connection2);
authuser.init(connection2);


module.exports = connection;
module.exports = connection2;