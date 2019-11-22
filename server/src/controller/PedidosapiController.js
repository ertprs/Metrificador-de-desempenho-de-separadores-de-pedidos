//const Pessoa = require('../model/Pessoa')
const sequelize = require('sequelize');
const Op = sequelize.Op
const Pedidos = require('../model/pedidosapi')

module.exports = {
    //LISTAGEM DE PESSOAS
    async indexPedidosApi(req, res) {
        console.log(req.params.id)

        const pedidos = await Pedidos.findAll({
            where: {
                /* CodigoPedido: {
                    [Op.gt]: 90269
                } */
                CodigoPedido: 90269
            }
        });


        
        return res.json(pedidos)
    },

    
}