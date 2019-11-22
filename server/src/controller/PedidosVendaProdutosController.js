//const Pessoa = require('../model/Pessoa')
const sequelize = require('sequelize');
const Op = sequelize.Op
const PedidosVendaProdutos = require('../model/pedidosvendaprodutos')

module.exports = {
    //LISTAGEM DE PESSOAS
    async indexPedidosVendaProdutos(req, res) {
        const pedidosvendaprodutos = await PedidosVendaProdutos.findAll({
            where: {
               
                CodigoPedido: 90269
            }
        });
        
        return res.json(pedidosvendaprodutos)
    },

    
}