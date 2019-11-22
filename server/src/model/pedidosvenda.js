/* jshint indent: 2 */

const { Model, DataTypes } = require('sequelize');

class pedidosvenda extends Model {
    static init(sequelize) {
        super.init({ 

          Codigo: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },

            Data: DataTypes.DATEONLY,
            
            Hora: DataTypes.TIME,
              
            CodigoVendedor: DataTypes.INTEGER(10).UNSIGNED,
              
            Vendedor: DataTypes.STRING(100),
              
            Tabela: DataTypes.STRING(50),
              
            CodigoCliente: DataTypes.INTEGER(10).UNSIGNED,
              
            RazaoCliente: DataTypes.STRING(100),
              
            CNPJ: DataTypes.STRING(20),
              
            IE: DataTypes.STRING(20),
              
            Status: DataTypes.STRING(1),
              
            FormaParcelamento: DataTypes.STRING(75),
              
            IDFormaParcelamento: DataTypes.INTEGER(10).UNSIGNED,
              
            ValorEntrada: DataTypes.DOUBLE,
              
            QuantidadePag: DataTypes.INTEGER(10).UNSIGNED,
              
            intervalo: DataTypes.INTEGER(10).UNSIGNED,
              
            Pjuros: DataTypes.DOUBLE,

            ValorFinalPagamentos: DataTypes.DOUBLE,

            TotalPedido: DataTypes.DOUBLE,

            Terminal: DataTypes.STRING(25),
              
            Usuario: DataTypes.STRING(25),
              
            Observacao: DataTypes.STRING(300),
              
            Empresa: DataTypes.INTEGER(10).UNSIGNED,
              
            Tipo: DataTypes.STRING(2),
              
            Objeto: DataTypes.STRING(25),
              
            NSerial: DataTypes.STRING(25),
              
            Marca: DataTypes.STRING(20),
              
            Modelo: DataTypes.STRING(20),
              
            Cor: DataTypes.STRING(20),
              
            Peso: DataTypes.STRING(20),
              
            KM: DataTypes.STRING(20),
              
            ServicosExecutar: DataTypes.STRING(1000),
              
            Cancelada: DataTypes.INTEGER(1).UNSIGNED,
              
            TotalServicos: DataTypes.DOUBLE,

            ValorFaturado: {
              type: DataTypes.DOUBLE,
              defaultValue: '0' },

            CodigoTransportadora: DataTypes.INTEGER(10).UNSIGNED,
              
            FretePorConta: DataTypes.INTEGER(10).UNSIGNED,
              
            ValorFrete: DataTypes.DOUBLE,

            VolumeNumero: DataTypes.INTEGER(10).UNSIGNED,
              
            VolumeMarca: DataTypes.STRING(45),
              
            VolumeEspecie: DataTypes.STRING(45),
              
            VolumeQtde: DataTypes.DOUBLE,

            TotalPesoB: DataTypes.DOUBLE,

            TotalPesoL: DataTypes.DOUBLE,

            Placa: DataTypes.STRING(8),
              
            UfPlaca: DataTypes.STRING(2),
              
            ConsumidorFinal: DataTypes.STRING(1),
              
            Observacao2: DataTypes.STRING(80),
              
            Observacao3: DataTypes.STRING(80),
              
            MotivoExclusao: DataTypes.STRING(500),
            
            UsuarioExclusao: DataTypes.STRING(45),
             
            TerminalExclusao: DataTypes.STRING(45),
             
            DataExclusao: DataTypes.DATEONLY,
              
            HoraExclusao: DataTypes.TIME,
             
            LiberadoPor: DataTypes.STRING(45),
             
            LIberadoData: DataTypes.DATE,
              
            CodObjeto: DataTypes.INTEGER(10).UNSIGNED,
             
            Palm_nPedido: DataTypes.INTEGER(10).UNSIGNED,
              
            Palm_Nviagem: DataTypes.INTEGER(10).UNSIGNED,
              
            NumeroPedidoVendedor: DataTypes.STRING(15),
             
            CodigoModalidadeCB: DataTypes.INTEGER(10).UNSIGNED,
              
            ModalidadeCB: DataTypes.STRING(25),
              
            Despachado: DataTypes.INTEGER(1).UNSIGNED,
              
            DataDespache: DataTypes.DATEONLY,
              
            DataFim_Contrato: DataTypes.DATEONLY,
              
            DataRecepcao: DataTypes.DATEONLY,
              
            HoraRecepcao: DataTypes.TIME,
             
            StatusPre: DataTypes.STRING(25),
              
            StatusFin: DataTypes.STRING(25),
              
            Separado: DataTypes.INTEGER(1).UNSIGNED,
              
            TotalM3: DataTypes.DOUBLE,

            Carregado: DataTypes.INTEGER(1).UNSIGNED,
              
            CodigoCarregamento: DataTypes.INTEGER(10).UNSIGNED,
              
            StatusFlex: DataTypes.STRING(1),
              
            DataHoraAuditado: DataTypes.DATE,
              
            UsuarioAuditado: DataTypes.STRING(25),
              
            ObsAuditado: DataTypes.STRING(460),
              
            FPAuditado: DataTypes.STRING(75),
            
            DataHoraLibFlex: DataTypes.DATE,
             
            UsuarioLibFlex: DataTypes.STRING(25),
              
            ObsLibFlex: DataTypes.STRING(200),
              
            ValorFlex: DataTypes.DOUBLE,
           
            Palete: DataTypes.INTEGER(10).UNSIGNED,
              
            IDFormaP: DataTypes.INTEGER(10).UNSIGNED,
              
            DataFaturamento: DataTypes.DATEONLY,
              
            Pacote: DataTypes.INTEGER(1).UNSIGNED,
              
            Endereco: DataTypes.STRING(200),
              
            Numero: DataTypes.STRING(10),
              
            Bairro: DataTypes.STRING(100),
              
            Cidade: DataTypes.STRING(150),
              
            CEP: DataTypes.STRING(10),
              
            UF: DataTypes.STRING(50),
              
            Complemento: DataTypes.STRING(150),
              
            Email: DataTypes.STRING(300),
              
            WebSite: DataTypes.STRING(150),
              
            Telefone1: DataTypes.STRING(150),
              
            Telefone2: DataTypes.STRING(150),
              
            Fax: DataTypes.STRING(15),
              
            CodIDEnd: DataTypes.STRING(15),
              
            CodCidadeIBGE: DataTypes.STRING(15),
              
            VendaGerada: DataTypes.INTEGER(10).UNSIGNED,
              
            CodigoAntt: DataTypes.STRING(20),
            
            ObsSeparacaoConferencia: DataTypes.STRING(500),
              
            Gerado: {
              type: DataTypes.INTEGER(1).UNSIGNED,
              defaultValue: '0' },
            
            Data_Primeira_Parcela: DataTypes.DATEONLY,
             
            Nome_LocalEntrega: DataTypes.STRING(45),
              
            ContatoForma: DataTypes.STRING(45),
              
            Tipointervalo: DataTypes.STRING(1),
              
            Presenca: DataTypes.INTEGER(1).UNSIGNED,
              
            Separacao_Data: DataTypes.DATE,
             
            Separacao_Usuario: DataTypes.STRING(45),
              
            Contribuinte_Icms: DataTypes.STRING(1),
             
            IDFidelize: DataTypes.INTEGER(11),
             
            TemCorte: {
              type: DataTypes.INTEGER(1).UNSIGNED,
              defaultValue: '0'},
          
            idPreSeparacao: DataTypes.INTEGER(10).UNSIGNED,
              
            UserID: DataTypes.STRING(15),
              
            UsuarioLancou:  DataTypes.STRING(45),
              
            DataEntregaVenda: DataTypes.DATEONLY,
              
            obsinterna:  DataTypes.STRING(500),
              
            Impresso: DataTypes.STRING(50),
              
            nRequisicaoPreVenda: DataTypes.STRING(45),
              
            Solicitante_RequisicaoPreVenda: DataTypes.STRING(45),
              
            RotaPedidos: DataTypes.INTEGER(11),
              
            NomeRotaPedidos: DataTypes.STRING(100),
             
            Autorizado_Nome: DataTypes.STRING(75),
              
            Autorizado_CPF: DataTypes.STRING(12),
             
            CodigoOrcamento: DataTypes.INTEGER(11),
              
            SeparacaoStat: {
              type: DataTypes.INTEGER(1),
              defaultValue: '0'} ,
            
            InfoExtra1: DataTypes.STRING(15),
             
            InfoExtra2: DataTypes.STRING(15),
              
            InfoExtra3: DataTypes.STRING(15),
              
            IDMeusPedidos: DataTypes.INTEGER(11),
              
            QuemIndicou: DataTypes.INTEGER(10),
             
            Reboque1_Placa: DataTypes.STRING(8),
             
            Reboque1_UFPlaca: DataTypes.STRING(2),
             
            Reboque1_RNTC: DataTypes.STRING(20),
              
            Reboque2_Placa: DataTypes.STRING(8),
              
            Reboque2_UFPlaca: DataTypes.STRING(2),
              
            Reboque2_RNTC: DataTypes.STRING(20),
             
            Reboque3_Placa: DataTypes.STRING(8),
           
            Reboque3_UFPlaca: DataTypes.STRING(2),
             
            Reboque3_RNTC:  DataTypes.STRING(20),
            
            ImpressoColeta: {
              type: DataTypes.INTEGER(4),
              defaultValue: '0' },
            
            IdDevolucao: DataTypes.INTEGER(10),
            
            imp_server_IDPedido: DataTypes.INTEGER(11),
              
            imp_server_IDServidor: DataTypes.INTEGER(11),
             
            InfoExtra4: DataTypes.STRING(15),
              
            DataReativou: DataTypes.DATE,
              
            usuarioReativou: DataTypes.STRING(25),
             
            MotivoReativou: DataTypes.STRING(25),
              
            IdTipoPedidoMobile:  DataTypes.INTEGER(11),
             
            descricaoTipoPedidoMobile: DataTypes.STRING(50),
            
            FinalidadeVenda: DataTypes.INTEGER(1),
             
            IdPedidoUsuario_Sovis: DataTypes.STRING(11),
             
            Supervisor: DataTypes.STRING(75),
             
            CodSupervisor: DataTypes.INTEGER(11),
             
        }, {
            sequelize,
            tableName: 'pedidosvenda',
            timestamps: false
        })
    }
}

module.exports = pedidosvenda;



/* module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidosvenda', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Vendedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Tabela: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FormaParcelamento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    IDFormaParcelamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorEntrada: {
      type: "DOUBLE",
      allowNull: true
    },
    QuantidadePag: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    intervalo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Pjuros: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorFinalPagamentos: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalPedido: {
      type: "DOUBLE",
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Objeto: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NSerial: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Marca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Cor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Peso: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    KM: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ServicosExecutar: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Cancelada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TotalServicos: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorFaturado: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    CodigoTransportadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FretePorConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    VolumeNumero: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    VolumeMarca: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    VolumeEspecie: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    VolumeQtde: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalPesoB: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalPesoL: {
      type: "DOUBLE",
      allowNull: true
    },
    Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    UfPlaca: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ConsumidorFinal: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Observacao2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    Observacao3: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    MotivoExclusao: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    UsuarioExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TerminalExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataExclusao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraExclusao: {
      type: DataTypes.TIME,
      allowNull: true
    },
    LiberadoPor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    LIberadoData: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodObjeto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Palm_nPedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Palm_Nviagem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NumeroPedidoVendedor: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CodigoModalidadeCB: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ModalidadeCB: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Despachado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DataDespache: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataFim_Contrato: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataRecepcao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraRecepcao: {
      type: DataTypes.TIME,
      allowNull: true
    },
    StatusPre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    StatusFin: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Separado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TotalM3: {
      type: "DOUBLE",
      allowNull: true
    },
    Carregado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodigoCarregamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    StatusFlex: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DataHoraAuditado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UsuarioAuditado: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ObsAuditado: {
      type: DataTypes.STRING(460),
      allowNull: true
    },
    FPAuditado: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    DataHoraLibFlex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UsuarioLibFlex: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ObsLibFlex: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ValorFlex: {
      type: "DOUBLE",
      allowNull: true
    },
    Palete: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDFormaP: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataFaturamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Pacote: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Complemento: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    WebSite: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Telefone1: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Telefone2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CodIDEnd: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CodCidadeIBGE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    VendaGerada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoAntt: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ObsSeparacaoConferencia: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Gerado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Data_Primeira_Parcela: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Nome_LocalEntrega: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ContatoForma: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Tipointervalo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Presenca: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Separacao_Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Separacao_Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Contribuinte_Icms: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IDFidelize: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TemCorte: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    idPreSeparacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    UsuarioLancou: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataEntregaVenda: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    obsinterna: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Impresso: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nRequisicaoPreVenda: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Solicitante_RequisicaoPreVenda: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    RotaPedidos: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NomeRotaPedidos: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Autorizado_Nome: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Autorizado_CPF: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    CodigoOrcamento: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SeparacaoStat: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    InfoExtra1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    InfoExtra2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    InfoExtra3: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDMeusPedidos: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    QuemIndicou: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Reboque1_Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Reboque1_UFPlaca: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Reboque1_RNTC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Reboque2_Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Reboque2_UFPlaca: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Reboque2_RNTC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Reboque3_Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Reboque3_UFPlaca: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Reboque3_RNTC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ImpressoColeta: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    IdDevolucao: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    imp_server_IDPedido: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    imp_server_IDServidor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    InfoExtra4: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DataReativou: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuarioReativou: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MotivoReativou: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    IdTipoPedidoMobile: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    descricaoTipoPedidoMobile: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FinalidadeVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    IdPedidoUsuario_Sovis: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    Supervisor: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    CodSupervisor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'pedidosvenda'
  });
}; */
