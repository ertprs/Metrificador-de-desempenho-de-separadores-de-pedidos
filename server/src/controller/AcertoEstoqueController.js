//const Pessoa = require('../model/Pessoa')
const AcertoEstoque = require('../model/acertoestoque')

module.exports = {
    //LISTAGEM DE PESSOAS
    async indexPessoa(req, res) {
        const pessoas = await AcertoEstoque.findAll();
        
        return res.json(pessoas)
    },

    
}