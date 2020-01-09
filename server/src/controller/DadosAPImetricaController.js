// BD2
const sequelize = require('sequelize');
const Op = sequelize.Op
const DadosAPImetrica = require('../model/DadosAPImetrica')
const separadores = ["JONATAS", "MICHEL", "GUILHERME", "RODRIGO", "EDMILSON", "DANIEL", "JHONNY", "JOSEPH", "THIAGO", "PAULO", "PAULO V.", "CARLOS", "MATHEUS A", "FERNANDO", "JOERBE", "PATRICK", "IVAN", "MARILIA"];

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

// pega os ultimos 5 pedidos
    async ultimosBDinserts(req, res){
        const dados =  await DadosAPImetrica.findAll({
            limit: 5,
            order: [ [ 'NumeroPedido', 'DESC' ],],
        })
        return res.json(dados);
    },

    async showdadosErrosSeparados(req, res) {
        let errosSeparado = [];
        console.log(req.query)
        let {  dataInicio, dataFinal } = req.query
        for(const separador of separadores){

            const dados = await DadosAPImetrica.sum('ErrosSeparador', {
                where: {
                    SEPARADOR: separador,
                    Data: {
                        [Op.between]: [dataInicio, dataFinal]
                    }
                }
            })
            console.log(dados)
            errosSeparado.push(dados)
        }

        return res.json(errosSeparado); 
    },

    async showDadosPedidosSeparados(req, res) {
        let pedidosSeparados = [];
        let {  dataInicio, dataFinal } = req.query

            for(const separador of separadores){

            const dados = await DadosAPImetrica.findAndCountAll({
                where: {
                    SEPARADOR: separador,
                    Data: {
                        [Op.between]: [dataInicio, dataFinal]
                    }
                }
            })
            pedidosSeparados.push(dados.count)
        }

        return res.json(pedidosSeparados); 

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
        console.log(dados)
        return res.json(dados); 
    },

    //Alterando dados no banco
    async alterDados(req, res) {
        const { NumeroPedido, ErrosConferentes } = req.body;
        try{
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
        }catch{
            return res.json("Cadastrado")
        }
    },


    //Salvando no banco
    async storeDados(req, res) {
        try{
        const dados = await DadosAPImetrica.create(req.body);

        return res.json(dados);
        }catch{
         return res.json("Cadastrado")   
        }
    }

   
} 