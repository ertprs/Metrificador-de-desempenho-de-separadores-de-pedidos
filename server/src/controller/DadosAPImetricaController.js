const DadosAPImetrica = require('../model/DadosAPImetrica')

module.exports = {
    //Salvando no banco
    async storeDados(req, res) {

        const dados = await DadosAPImetrica.create(req.body);

        return res.json(dados);
    }
} 