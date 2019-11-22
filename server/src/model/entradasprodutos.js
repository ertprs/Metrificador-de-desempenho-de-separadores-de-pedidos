/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entradasprodutos', {
    CodigoEntrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoBarras: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Referencia: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    UNCompra: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    UNVenda: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    QuantidadeNF: {
      type: "DOUBLE",
      allowNull: true
    },
    QuantidadeEntrada: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    PDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    Desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    PAcrescimo: {
      type: "DOUBLE",
      allowNull: true
    },
    Acrescimo: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseCalculoICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    PICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    ICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    PMVAST: {
      type: "DOUBLE",
      allowNull: true
    },
    ICMSST: {
      type: "DOUBLE",
      allowNull: true
    },
    PIPI: {
      type: "DOUBLE",
      allowNull: true
    },
    IPI: {
      type: "DOUBLE",
      allowNull: true
    },
    PFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    Frete: {
      type: "DOUBLE",
      allowNull: true
    },
    PCustoOp: {
      type: "DOUBLE",
      allowNull: true
    },
    CustoOp: {
      type: "DOUBLE",
      allowNull: true
    },
    CustoGerencial: {
      type: "DOUBLE",
      allowNull: true
    },
    PVendaT1: {
      type: "DOUBLE",
      allowNull: true
    },
    VendaT1: {
      type: "DOUBLE",
      allowNull: true
    },
    Baixado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CustoAnterior: {
      type: "DOUBLE",
      allowNull: true
    },
    CustoGerencialAnterior: {
      type: "DOUBLE",
      allowNull: true
    },
    VendaT1Anterior: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CustoUnitarioNF: {
      type: "DOUBLE",
      allowNull: true
    },
    PSeguro: {
      type: "DOUBLE",
      allowNull: true
    },
    Seguro: {
      type: "DOUBLE",
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoGrade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PCustoFormacao: {
      type: "DOUBLE",
      allowNull: true
    },
    Fabricante: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ObsProduto: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    BaixaComposicao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    BaseIcms: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseIcmsST: {
      type: "DOUBLE",
      allowNull: true
    },
    AliquotaInterST: {
      type: "DOUBLE",
      allowNull: true
    },
    Cfop_prod: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CST: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    tpProduto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NCM: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PrecoPauta: {
      type: "DOUBLE",
      allowNull: true
    },
    CustoFiscal: {
      type: "DOUBLE",
      allowNull: true
    },
    PrecoMaxConsumidor: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    FatorCadeia: {
      type: "DOUBLE",
      allowNull: true
    },
    EanTrib: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Considera_Credito_Icms: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Base_PISCofins: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Cst_Pis: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PPis: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPis: {
      type: "DOUBLE",
      allowNull: true
    },
    Cst_Cofins: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PCofins: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCofins: {
      type: "DOUBLE",
      allowNull: true
    },
    Frete_BC: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Base_II: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    DespesasAduaneiras: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    IOF: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Valor_II: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    chkAtivaCusto: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Outros_BC: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    PICMSST: {
      type: "DOUBLE",
      allowNull: true
    },
    pReducaoValorIcms: {
      type: "DOUBLE",
      allowNull: true
    },
    IgnoraComposicao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    NF_Origem_Dev: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Serie_Origem_Dev: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Dev_BasePis: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Dev_AlqPis: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Dev_AlqCofins: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Dev_ValorPis: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Dev_ValorCofins: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Outros_ICMSST: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Outros_ICMSRecolhido: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Outros_MVA: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    CST_IPI: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Considera_Credito_IPI: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Outros_Despesas_naoNF: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    outros_Basest: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    EXTIPI: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ObsLote: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ValorFreteConhecimento: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    CEST: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    ValorIcms_Diferido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pIcms_Diferido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    vICMSDeson: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    ObsDivergenciaPedidoCompra: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TipoDivergencia: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    codigofabrica: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    obsICMSRetido: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    NOrdemCompra: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SeqOrdemCompra: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    pAdicional: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorAdicional: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    AlterouTabelaPreco: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Valor_FCP_ST: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    IDVeiculo_ControleVeiculo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PlacaVeiculo_ControleVeiculo: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    KMVeiculo_ControleVeiculo: {
      type: "DOUBLE",
      allowNull: true
    },
    LTVeiculo_ControleVeiculo: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoAnvisa: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    CodigoANP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    descANP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Gas_pGLP: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Gas_pGNn: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Gas_pGNi: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Gas_vPart: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pRedBCEfet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    vBCEfet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pICMSEfet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    vICMSEfet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Alq_FCP: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    VAlor_FCP: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    BaseIPI: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Outros_AliqST: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    TaxaSisComex: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Outros_FcpST: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    vICMSSubstituto: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ValorBaseFCP: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    me_valorunitario: {
      type: "DOUBLE",
      allowNull: true
    },
    me_valortotal: {
      type: "DOUBLE",
      allowNull: true
    },
    me_desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    me_acrescimo: {
      type: "DOUBLE",
      allowNull: true
    },
    me_frete: {
      type: "DOUBLE",
      allowNull: true
    },
    me_custoOp: {
      type: "DOUBLE",
      allowNull: true
    },
    me_custoUnitarioNF: {
      type: "DOUBLE",
      allowNull: true
    },
    me_seguro: {
      type: "DOUBLE",
      allowNull: true
    },
    me_custofiscal: {
      type: "DOUBLE",
      allowNull: true
    },
    me_valoradicional: {
      type: "DOUBLE",
      allowNull: true
    },
    me_outrosDespesasNaoNF: {
      type: "DOUBLE",
      allowNull: true
    },
    me_valorfreteconhecimento: {
      type: "DOUBLE",
      allowNull: true
    },
    cBenef: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    modBcST: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    IcmsEstSimplificada: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Outros_Desconto_naoNF: {
      type: "DOUBLE(11,2)",
      allowNull: true
    }
  }, {
    tableName: 'entradasprodutos'
  });
};
