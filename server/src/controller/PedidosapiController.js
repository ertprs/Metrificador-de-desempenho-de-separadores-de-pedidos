//const Pessoa = require('../model/Pessoa')
const sequelize = require('sequelize');
const Op = sequelize.Op
const Pedidos = require('../model/pedidosapi')

module.exports = {
    //LISTAGEM DE PESSOAS
    async indexPedidosApi(req, res) {
        

        const pedidos = await Pedidos.findAll({
            where: {
                /* CodigoPedido: {
                    [Op.gt]: 90269
                } */
                Numero_pedido: req.params.id
            }
        });


        
        return res.json(pedidos)
    },

    
}