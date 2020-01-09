const express = require('express');
require('dotenv').config();

var jwt = require('jsonwebtoken');


const PedidosVendaController = require('./controller/PedidosVendaController');
const PedidosVendaProdutosController = require('./controller/PedidosVendaProdutosController');
const ProdutoController = require('./controller/ProdutoController');
const PedidosapiController = require('./controller/PedidosapiController');
const ProdutosApiController = require('./controller/ProdutosApiController')
const AuthController = require('./controller/AuthController');

const DadosAPImetricaController = require('./controller/DadosAPImetricaController')

const routes = express.Router();



routes.get('/pedidosvenda',verifyJWT , PedidosVendaController.indexPedidosVenda);


routes.get('/pedidosapi/:id',verifyJWT , PedidosapiController.indexPedidosApi);

routes.get('/produtosapi/:id',verifyJWT , ProdutosApiController.indexProdutosApi);


routes.get('/pedidosvendaprodutos',verifyJWT , PedidosVendaProdutosController.indexPedidosVendaProdutos);

routes.get('/produtos',verifyJWT , ProdutoController.indexProdutos);

//ROTAS BANCO DE DADOS 2
routes.get('/dadosMetrica/:NumeroPedido', verifyJWT , DadosAPImetricaController.showDados);
// puxa por nome
routes.get('/dadosMetrica/separador/:nome', verifyJWT , DadosAPImetricaController.showDadosSeparador);

routes.post('/dados/data', verifyJWT , DadosAPImetricaController.showDadosData);

//retorna os pedidos de todos os separadores entre datas
routes.get('/dados/Pedidos/Separados', verifyJWT , DadosAPImetricaController.showDadosPedidosSeparados);
//retorna os erros de todos os separadores entre datas
routes.get('/dados/pedidos/errosSeparados', verifyJWT , DadosAPImetricaController.showdadosErrosSeparados);

//retorna os ultimos 5 pedidos feitos
routes.get('/ultimosPedidos', verifyJWT , DadosAPImetricaController.ultimosBDinserts);

routes.post('/create/dadosMetrica', verifyJWT , DadosAPImetricaController.storeDados);

routes.put('/update/dadosMetrica', verifyJWT , DadosAPImetricaController.alterDados);

//auth
// login
routes.post('/auth/login', AuthController.login);

// register
routes.post('/auth/register',AuthController.register);

//logout
routes.get('/auth/logout', AuthController.logout);


function verifyJWT(req, res, next){
    console.log("validando token ")

    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(511).send({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      
      next();
    });
  }

module.exports = routes;