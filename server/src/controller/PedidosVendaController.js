//const Pessoa = require('../model/Pessoa')
const sequelize = require('sequelize');
const Op = sequelize.Op
const PedidosVenda = require('../model/pedidosvenda')

module.exports = {
    //LISTAGEM DE PESSOAS
    async indexPedidosVenda(req, res) {
        const pedidosvenda = await PedidosVenda.findAll({
            where: {
                /* Codigo: {
                    [Op.gt]: 80000
                } */
                Codigo: 90269
            }
        });
        
        return res.json(pedidosvenda)
    },

    
}