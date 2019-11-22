/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entradas', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    DataEntrada: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraEntrada: {
      type: DataTypes.TIME,
      allowNull: true
    },
    DataEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoFornecedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CNPJFornecedor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BaseCalculoICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseCalculoICMSSubstituicao: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorICMSSubstituicao: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotalProdutos: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorSeguro: {
      type: "DOUBLE",
      allowNull: true
    },
    OutrasDespesas: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotalIPI: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorAcrescimo: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotalNota: {
      type: "DOUBLE",
      allowNull: true
    },
    NumeroNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CodigoTransportadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoTransportadora: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CFOP: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DescricaoCFOP: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IEFornecedor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UFFornecedor: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Categoria: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Operacao: {
      type: DataTypes.STRING(65),
      allowNull: true
    },
    FreteConta: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Quantidade: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Especie: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Marca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PesoBruto: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PesoLiquido: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PlacaVeiculo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    UFVeiculo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    CondicaoPagamento: {
      type: DataTypes.STRING(35),
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
    MovEstoque: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    BaseIsento: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseOutros: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseDiferido: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseRetido: {
      type: "DOUBLE",
      allowNull: true
    },
    Manual: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ObsCompra: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ObsCompra2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ObsCompra3: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Decreto1: {
      type: DataTypes.STRING(2000),
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
    Nfe_tpEmis: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ChaveNFE_Contigencia: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    Modelo_Serie: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Linha2: {
      type: DataTypes.STRING(180),
      allowNull: true
    },
    SerieNF_Antes: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NumNF_Antes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MotivoCancNFe: {
      type: DataTypes.STRING(255),
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
    NomeFantasia: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    DataHora_Contigencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Vxml: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ConhecimentoFrete: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Linha5: {
      type: DataTypes.STRING(160),
      allowNull: true
    },
    EmailEnviado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Total_PIS: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Total_Cofins: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Energia_Classe: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Energia_Ligacao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Energia_Tensao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Telefonia_TipoAssinante: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ET_PICMS: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DataConferenciaCega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Conhecimento_Natureza: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conhecimento_TipoCTE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Conhecimento_ChaveREF: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Conhecimento_NatBC_Pis: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Total_II: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Obs_Extra: {
      type: DataTypes.STRING(1500),
      allowNull: true
    },
    CNPJTransportadora: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IETransportadora: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EnderecoTransportadora: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    CidadeTransportadora: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UFTransportadora: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CodigoANTT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Modelo_SubSerie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    isMyMilk: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    vSchema: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CompraQuitada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Dev_Base_Pis: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    DEv_Total_Pis: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Dev_Total_Cofins: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    erro_servidorSefaz: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Data_Ultima_Alteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nPedidosCompra: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Desc_Cred_Pis: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Finalidade_NF: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    DespesasNaoInclusas: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    CONSFINAL: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    indPresenca: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    idEmitente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    idComprador: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    RazaoComprador: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CP_Hist: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    UTC_DataAutorizacao: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    indieDest: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Conhecimento_TotalMercadoria: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    TotalIcmsDesonerado: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    TotalFunrural: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    NaturezaOperacao: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    DuplicataEmMaos: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    TotalFundoCapital: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    TerminalLancamento: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    UsuarioLancamento: {
      type: DataTypes.STRING(25),
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
    CondicaoPagamentoAuditado: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    VersaoMy: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Env_Faturas: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Contribuinte_Icms: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CTe_UF_Origem_Prestacao: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CTe_IDCidade_Origem_Prestacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CTe_Cidade_Origem_Prestacao: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CTe_UF_Destino_Prestacao: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CTe_IDCidade_Destino_Prestacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CTe_Cidade_Destino_Prestacao: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PeriodoInicialMyMilk: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PeriodoFinalMyMilk: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Total_FCP_ST: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Linha1: {
      type: DataTypes.STRING(180),
      allowNull: true
    },
    Linha3: {
      type: DataTypes.STRING(180),
      allowNull: true
    },
    Linha4: {
      type: DataTypes.STRING(180),
      allowNull: true
    },
    TotalFecop: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    TotalFecopST: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    AbateIcmsDesonTotal: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    TotalIPI_Devolvido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    idOrdemDesossa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    moedaentrada: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    me_valortotalprodutos: {
      type: "DOUBLE",
      allowNull: true
    },
    me_valorfrete: {
      type: "DOUBLE",
      allowNull: true
    },
    me_valorseguro: {
      type: "DOUBLE",
      allowNull: true
    },
    me_outrasdespesas: {
      type: "DOUBLE",
      allowNull: true
    },
    me_valordesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    me_valoracrescimo: {
      type: "DOUBLE",
      allowNull: true
    },
    me_valortotalnota: {
      type: "DOUBLE",
      allowNull: true
    },
    Usuario_Exclusao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Terminal_Exclusao: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DataHora_Exclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DivergenciaConferiu: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescontoNaoIncluso: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Auditada: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'entradas'
  });
};
