const DadosAPImetrica = require('../model/DadosAPImetrica')

module.exports = {
    async indexDados(req, res) {
        let { NumeroPedido } = req.params;
        // TEM QUE CONVERTER PRA INTEGER, POIS VINDO DA ROTA O ID VEM COMO STRING, E NO BANCO ESTÁ COMO INTEGER
        NumeroPedido = Number(NumeroPedido)
        
        const dados =  await DadosAPImetrica.findAll({
            where: {
                NumeroPedido: NumeroPedido
            }
        })

        return res.json(dados); 
    },

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