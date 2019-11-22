//const Pessoa = require('../model/Pessoa')
const sequelize = require('sequelize')

module.exports = {
    //LISTAGEM DE PESSOAS
    async indexPessoa(req, res) {
        
        sequelize.query("SELECT * FROM apuracao_ipi",{ replacements: ['active'], type: sequelize.QueryTypes.SELECT }).then(result => {
            return result;
          })
    }

    
}