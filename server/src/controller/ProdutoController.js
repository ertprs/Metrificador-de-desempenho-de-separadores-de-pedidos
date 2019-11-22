const sequelize = require('sequelize');
const Op = sequelize.Op
const Produtos = require('../model/produtos')

module.exports = {
    //LISTAGEM DE PESSOAS
    async indexProdutos(req, res) {
        const produtos = await Produtos.findAll({
            where: {
                /* Codigo: {
                    [Op.gt]: 80000
                } */
                Referencia: '16698'
            }
        });
        
        return res.json(produtos)
    },

    
}