// BD2
const sequelize = require('sequelize');
const Op = sequelize.Op
const DadosAPImetrica = require('../model/DadosAPImetrica')

module.exports = {
    async showDados(req, res) {
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

    async showDadosSeparador(req, res) {
        
        let { nome } = req.params;
      

        const dados =  await DadosAPImetrica.findAll({
            where: {
                Separador: nome
            }
        })

        return res.json(dados); 
    },

    async showDadosPedidosSeparados(req, res) {

        let { nome, dataInicio, dataFinal } = req.body

        // pegando os pedidos separados
        const dados = await DadosAPImetrica.findAndCountAll({
            where: {
                SEPARADOR: nome,
                Data: {
                    [Op.between]: [dataInicio, dataFinal]
                }
            }
        })

        // pegando os erros realizados
        const dados2 = await DadosAPImetrica.sum('ErrosSeparador', {
            where: {
                SEPARADOR: nome,
                Data: {
                    [Op.between]: [dataInicio, dataFinal]
                }
            }
        })

        let resultado = new Object();
        resultado.pedidosSeparados = dados.count; // pedidos separados
        resultado.errosRealizados = dados2; // erros realizados

        return res.json(resultado); 

    },

    async showDadosData(req, res) {
        console.log("entrou")
        let { dataInicio, dataFinal } = req.body;
        console.log(dataInicio, dataFinal)

        const dados =  await DadosAPImetrica.findAll({
            where: {
                Data: {
                    [Op.between]: [dataInicio, dataFinal]
                }
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