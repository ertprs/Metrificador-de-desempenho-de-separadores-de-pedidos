const express = require('express');

const AcertoEstoqueController = require('./controller/AcertoEstoqueController');
const PedidosVendaController = require('./controller/PedidosVendaController');
const PedidosVendaProdutosController = require('./controller/PedidosVendaProdutosController');
const ProdutoController = require('./controller/ProdutoController');


const routes = express.Router();

routes.get('/pessoas', AcertoEstoqueController.indexPessoa);

routes.get('/pedidosvenda', PedidosVendaController.indexPedidosVenda);

routes.get('/pedidosvendaprodutos', PedidosVendaProdutosController.indexPedidosVendaProdutos);

routes.get('/produtos', ProdutoController.indexProdutos)
"teste"


module.exports = routes;