/* jshint indent: 2 */

const { Model, DataTypes } = require('sequelize');

class pedidosapi extends Model {
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
                                      
            CodigoCliente: DataTypes.INTEGER(10).UNSIGNED,
              
            RazaoCliente: DataTypes.STRING(100),
              
            ModalidadeCB: DataTypes.STRING(25),
                    
            Cidade: DataTypes.STRING(150),
                                            
            Telefone1: DataTypes.STRING(150),
              
            FormaParcelamento: DataTypes.STRING(75),

            CodigoVendedor: DataTypes.INTEGER(10).UNSIGNED,
                         
        }, {
            sequelize,
            tableName: 'pedidosapi',
            timestamps: false
        })
    }
}

module.exports = pedidosapi;



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
