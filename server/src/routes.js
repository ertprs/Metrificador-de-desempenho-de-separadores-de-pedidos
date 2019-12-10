const express = require('express');


const PedidosVendaController = require('./controller/PedidosVendaController');
const PedidosVendaProdutosController = require('./controller/PedidosVendaProdutosController');
const ProdutoController = require('./controller/ProdutoController');
const PedidosapiController = require('./controller/PedidosapiController');
const ProdutosApiController = require('./controller/ProdutosApiController')

const DadosAPImetricaController = require('./controller/DadosAPImetricaController')

const routes = express.Router();



routes.get('/pedidosvenda', PedidosVendaController.indexPedidosVenda);


routes.get('/pedidosapi/:id', PedidosapiController.indexPedidosApi);

routes.get('/produtosapi/:id', ProdutosApiController.indexProdutosApi);


routes.get('/pedidosvendaprodutos', PedidosVendaProdutosController.indexPedidosVendaProdutos);

routes.get('/produtos', ProdutoController.indexProdutos);

//ROTAS BANCO DE DADOS 2
routes.get('/dadosMetrica/:NumeroPedido', DadosAPImetricaController.showDados);

routes.get('/dadosMetrica/separador/:nome', DadosAPImetricaController.showDadosSeparador);

routes.post('/dados/data', DadosAPImetricaController.showDadosData);

routes.get('/dados/Pedidos/Separados', DadosAPImetricaController.showDadosPedidosSeparados)

routes.post('/create/dadosMetrica', DadosAPImetricaController.storeDados);

routes.put('/update/dadosMetrica', DadosAPImetricaController.alterDados);

module.exports = routes;