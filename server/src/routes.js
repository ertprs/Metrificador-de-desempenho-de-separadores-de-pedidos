const express = require('express');


const PedidosVendaController = require('./controller/PedidosVendaController');
const PedidosVendaProdutosController = require('./controller/PedidosVendaProdutosController');
const ProdutoController = require('./controller/ProdutoController');
const PedidosapiController = require('./controller/PedidosapiController');
const ProdutosApiController = require('./controller/ProdutosApiController')

const routes = express.Router();



routes.get('/pedidosvenda', PedidosVendaController.indexPedidosVenda);


routes.get('/pedidosapi', PedidosapiController.indexPedidosApi);

routes.get('/produtosapi', ProdutosApiController.indexProdutosApi);


routes.get('/pedidosvendaprodutos', PedidosVendaProdutosController.indexPedidosVendaProdutos);

routes.get('/produtos', ProdutoController.indexProdutos)



module.exports = routes;