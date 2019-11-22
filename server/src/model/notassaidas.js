/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notassaidas', {
    NF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DataSaida: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    HoraSaida: {
      type: DataTypes.TIME,
      allowNull: false
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CFOP: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    TotalBaseCalculo: {
      type: "DOUBLE(11,2) UNSIGNED",
      allowNull: true,
      defaultValue: '0.00'
    },
    TotalIcms: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    BaseCalculoSub: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    ValorIcmsSub: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    TotalProdutos: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    TotalProdutosTabela: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    TotalFrete: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    ValorSeguro: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    OutrasDespesas: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    TotalIPI: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    TotalServicos: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    TotalServicosTabela: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    TotalNF: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    CodigoTransportadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FretePorConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    UFPlaca: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    QtdeVol: {
      type: "DOUBLE",
      allowNull: true
    },
    EspecieVol: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Marca: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NumeroVol: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PesoBruto: {
      type: "DOUBLE",
      allowNull: true
    },
    PesoLiquido: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    NVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Linha1: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Linha2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Linha3: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Linha4: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Linha5: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TotalIss: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Serie: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NomeTransportadora: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CnpjTransportadora: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EnderecoTransportadora: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CidadeTransportadora: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UFTransportadora: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IETransportadora: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Cancelada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NUmero: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ObsVenda: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    ObsVenda2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ObsVenda3: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    MovimentaEstoque: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TipoMovimentacao: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SerialECF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OS_Objeto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    OS_NSerial: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    OS_Marca: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    OS_Modelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OS_Motorista: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    OS_KM: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Situacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ChaveNFE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DigVal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MsgRetorno: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cstat: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IdLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NAutorizacao: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NCancelamento: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    MsgRetornoCancelamento: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DataCancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataAutorizacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NPedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MsgAlqNacional: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    NumNF_Antes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SerieNF_Antes: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ChaveNFE_Contigencia: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    NFE_tpEmis: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    MotivoCancNFE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    SEQ_CupomRef: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDEnd_Entrega: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    TpAmbiente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NAut_DPEC: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Data_DPEC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Prod_Agrupado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TotalDescontos: {
      type: "DOUBLE",
      allowNull: true
    },
    DataHora_Contigencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoVend: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeVend: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vXML: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CodCarregamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Vend_Telefone: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NumeroPedidoVendedor: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ModalidadeCB: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PosicaoCarga: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EmailEnviado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Dest_FisicaJuridica: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Dest_Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Dest_Fantasia: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Dest_CNPJ: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    Dest_IE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Dest_CPF: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Dest_RG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Dest_Endereco: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    Dest_Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Dest_Complemento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Dest_Bairro: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Dest_Cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Dest_CodCidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Dest_Cidade: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Dest_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Dest_CodPais: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Dest_NomePais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Dest_Fone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Dest_Email: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Dest_IE_Suframa: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    Base_PisCofins: {
      type: "DOUBLE",
      allowNull: true
    },
    Total_PIS: {
      type: "DOUBLE",
      allowNull: true
    },
    Total_Cofins: {
      type: "DOUBLE",
      allowNull: true
    },
    FormaParcelamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Finalidade_NF: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    obs_extra: {
      type: DataTypes.STRING(1500),
      allowNull: true
    },
    CodigoAntt: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NDoacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    vSchema: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DataEntrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Erro_ServidorSefaz: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    IBPT_Total_Tributos: {
      type: "DOUBLE",
      allowNull: true
    },
    TrocoPDV: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    ModeloNF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    UTC_DataAutorizacao: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    LinkQRCode: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    idOrdemEntrega: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    COI: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ConsFinal: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    IndPresenca: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '9'
    },
    IDEmitente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    indPag: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    OFF_IDLote: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Total_Pis_ST: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Total_Cofins_ST: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Contribuinte_Icms: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Env_Faturas: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    SimplesNacional: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    TotalIcmsDesonerado: {
      type: "DOUBLE(11,2)",
      allowNull: false,
      defaultValue: '0.00'
    },
    FoneTransportadora: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SequenciaNotaPDV: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    indieDest: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    VersaoPDV: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    TotalIcmsFundoPobreza: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    TotalIcmsUFDestino: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    TotalIcmsRemetente: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    VersaoMy: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TotalFecop: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    idDest: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    NaturezaOperacao: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ClienteResp: {
      type: DataTypes.INTEGER(11),
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
    Cli_Agrupado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    TotalFecopST: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    TotalIPI_Devolvido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    UFEntrega: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TotalFecopSTRetido: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    idOrdemDesossa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FinalidadeVenda: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    MovPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ven_uuid_pdv: {
      type: "BINARY(16)",
      allowNull: true
    },
    TotalBaseCalculoDiferido: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    EnviaDataSaida: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'notassaidas'
  });
};
