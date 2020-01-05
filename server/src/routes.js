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
// puxa por nome
routes.get('/dadosMetrica/separador/:nome', DadosAPImetricaController.showDadosSeparador);

routes.post('/dados/data', DadosAPImetricaController.showDadosData);

//retorna os pedidos de todos os separadores entre datas
routes.get('/dados/Pedidos/Separados', DadosAPImetricaController.showDadosPedidosSeparados);
//retorna os erros de todos os separadores entre datas
routes.get('/dados/pedidos/errosSeparados', DadosAPImetricaController.showdadosErrosSeparados);

//retorna os ultimos 5 pedidos feitos
routes.get('/ultimosPedidos', DadosAPImetricaController.ultimosBDinserts);

routes.post('/create/dadosMetrica', DadosAPImetricaController.storeDados);

routes.put('/update/dadosMetrica', DadosAPImetricaController.alterDados);

module.exports = routes;