const express = require('express');

const PessoaController = require('./controller/PessoaController');


const routes = express.Router();

routes.get('/pessoas', PessoaController.indexPessoa);



module.exports = routes;