//const Pessoa = require('../model/Pessoa')
const sequelize = require('sequelize');
const Op = sequelize.Op
const Pedidos = require('../model/pedidosapi')

module.exports = {
    //LISTAGEM DE PESSOAS
    async indexPedidosVendasapi(req, res) {
        console.log(req.params.id)
        const pedidos = await Pedidos.findAll(/* {
            where: {
                 Codigo: {
                    [Op.gt]: 80000
                } 
                 Codigo: req.params.id
            }
        } */ );
        
        return res.json(pedidos)
    },

    
}