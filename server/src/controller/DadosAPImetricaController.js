const DadosAPImetrica = require('../model/DadosAPImetrica')

module.exports = {
    //Alterando dados no banco
    async alterDados(req, res) {
        const { NumeroPedido, ErrosConferentes } = req.body;

        DadosAPImetrica.update(
            {
                ErrosConferentes: ErrosConferentes,
            
            },
            {
                where: 
                { 
                    NumeroPedido: NumeroPedido
                }
            }
        )

        return res.json( {sucesso: "Dadods Alterados com Sucesso!"});
    },


    //Salvando no banco
    async storeDados(req, res) {

        const dados = await DadosAPImetrica.create(req.body);

        return res.json(dados);
    }
} 