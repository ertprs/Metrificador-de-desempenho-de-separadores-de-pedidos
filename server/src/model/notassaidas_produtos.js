/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notassaidas_produtos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    Ref: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorTabela: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    AliquotaICms: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorIcms: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    AliquotaIPI: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorIPI: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TotalPesoBruto: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    TotalPesoLiquido: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    CNN: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: '0'
    },
    CF: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ValorISS: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Serie: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    BaseCalculoICMS: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    BaseCalculo: {
      type: "DOUBLE",
      allowNull: true
    },
    SequenciaNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ObsProduto: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Marca: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SeqVendasProdutos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DetalhesServicos: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    NumeroSerieECF: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    IndiceItem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoGrade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cfop_Prod: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TotalVolume: {
      type: "DOUBLE",
      allowNull: true
    },
    UnVolumeProd: {
      type: DataTypes.STRING(3),
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
    NCM: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MVA_ST: {
      type: "DOUBLE",
      allowNull: true
    },
    Base_ST: {
      type: "DOUBLE",
      allowNull: true
    },
    ICMS_ST: {
      type: "DOUBLE",
      allowNull: true
    },
    Veic_Operacao: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Veic_Tipo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Veic_especie: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Veic_Chassis: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Veic_Motor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Veic_Serie: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Veic_CodModelo: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Veic_AnoMOD: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Veic_AnoFab: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Veic_Renavam: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Veic_CodPintura: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Veic_CodCor: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Veic_DescCOR: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Veic_Potencia: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Veic_CM3: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Veic_CMKG: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    Veic_PesoB: {
      type: "DOUBLE",
      allowNull: true
    },
    Veic_PesoL: {
      type: "DOUBLE",
      allowNull: true
    },
    Veic_DistanciaEixo: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Veic_Combustivel: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Veic_CondVIN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Veic_CondVeiculo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NReceituario: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TpProduto: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Codbar: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ValorDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    AlqIcms_Simples: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCreditoIcmsSimples: {
      type: "DOUBLE",
      allowNull: true
    },
    PrecoMaxConsumidor: {
      type: "DOUBLE",
      allowNull: true
    },
    MarcoEtq: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    TotalValorPauta_ST: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeCxVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    TpListaMed: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AliqICMS_Intra: {
      type: "DOUBLE",
      allowNull: true
    },
    EANTrib: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Dev_Outros: {
      type: "DOUBLE",
      allowNull: true
    },
    Base_PisCofins: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    CST_PIS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Aliq_PIS: {
      type: "DOUBLE",
      allowNull: true
    },
    Valor_Pis: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    CST_Cofins: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Aliq_Cofins: {
      type: "DOUBLE",
      allowNull: true
    },
    Valor_Cofins: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Valor_Outros: {
      type: "DOUBLE",
      allowNull: true
    },
    VolumeITem: {
      type: "DOUBLE",
      allowNull: true
    },
    AliqIcms_Inter: {
      type: "DOUBLE",
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
    ValorIcms_Desonerado: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    Veic_CodCorDenatran: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Veic_Lotacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Veic_Restricao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoANP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    QtdeUND: {
      type: "DOUBLE",
      allowNull: true
    },
    IBPT_Tributos: {
      type: "DOUBLE",
      allowNull: true
    },
    CST_IPI: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Seriais: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    FCI_Numero: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Valor_Seguro: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    BaseIPI: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    BaseST_Retido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    IcmsST_Retido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    EXTIPI: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ObsLote: {
      type: DataTypes.STRING(300),
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
    IBPT_Tributos_Federal: {
      type: "DOUBLE",
      allowNull: true
    },
    IBPT_Tributos_Estadual: {
      type: "DOUBLE",
      allowNull: true
    },
    IBPT_Tributos_Municipal: {
      type: "DOUBLE",
      allowNull: true
    },
    CEST: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    obsFecop: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Difal_ValorBaseDestino: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Difal_pFundoPobreza: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Difal_AliqEstadual: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Difal_AliqInternaDestino: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Difal_pPartilha: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Difal_ValorIcmsFundoPobreza: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Difal_ValorIcmsDestino: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Difal_ValorIcmsOrigem: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    cEnqIPI: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    AliqFecop: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorFecop: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    CodNaturezaPis: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    obsICMSRetido: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    UnTrib: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    QtdeTrib: {
      type: "DOUBLE",
      allowNull: true
    },
    Valor_Desc_Base_PisCofins: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseFecop: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    BaseFecopST: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AliqFecopST: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ValorFecopST: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    descANP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoAnvisa: {
      type: DataTypes.STRING(20),
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
      type: "DOUBLE(11,4)",
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
    pIPI_Devolvido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ValorIPI_Devolvido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    cBenef: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Pst_Retido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    FcpST_Retido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pFcpST_Retido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    vICMSSubstituto: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    vdi_uuid_pdv: {
      type: "BINARY(16)",
      allowNull: true
    },
    Aliq_Diferido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    BaseIcms_Diferido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    modBC: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'notassaidas_produtos'
  });
};
