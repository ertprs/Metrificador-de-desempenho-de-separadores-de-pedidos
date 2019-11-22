//const Pessoa = require('../model/Pessoa')
const sequelize = require('sequelize');
const Op = sequelize.Op
const Pedidos = require('../model/produtosapi')

module.exports = {
    //LISTAGEM DE PESSOAS
    async indexProdutosApi(req, res) {
        console.log(req.params.id)
        const pedidos = await Pedidos.findAll({
            where: {
                /* CodigoPedido: {
                    [Op.gt]: 90269
                } */
                CodigoPedido: req.params.id
            }
            
        });
        
        return res.json(pedidos)
    },

    
}