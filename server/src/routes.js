const express = require('express');


const PedidosVendaController = require('./controller/PedidosVendaController');
const PedidosVendaProdutosController = require('./controller/PedidosVendaProdutosController');
const ProdutoController = require('./controller/ProdutoController');
const PedidosapiController = require('./controller/PedidosapiController');

const routes = express.Router();



routes.get('/pedidosvenda', PedidosVendaController.indexPedidosVenda);

routes.get('/pedidosapi/', PedidosapiController.indexPedidosVendasapi);

routes.get('/pedidosvendaprodutos', PedidosVendaProdutosController.indexPedidosVendaProdutos);

routes.get('/produtos', ProdutoController.indexProdutos)



module.exports = routes;