/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrc_saida', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCLiente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NumeroDoc: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Data_Emissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Data_Prestacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Tipo_CTe: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Chave_CTe: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Tipo_Frete: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Chave_Cte_Ref: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    CFOP: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Base_PisCofins: {
      type: "DOUBLE",
      allowNull: true
    },
    Cst_Pis: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Aliq_Pis: {
      type: "DOUBLE",
      allowNull: true
    },
    Valor_Pis: {
      type: "DOUBLE",
      allowNull: true
    },
    Cst_Cofins: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Aliq_Cofins: {
      type: "DOUBLE",
      allowNull: true
    },
    Valor_Cofins: {
      type: "DOUBLE",
      allowNull: true
    },
    Cst_icms: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Base_Icms: {
      type: "DOUBLE",
      allowNull: true
    },
    Aliq_Icms: {
      type: "DOUBLE",
      allowNull: true
    },
    Valor_Icms: {
      type: "DOUBLE",
      allowNull: true
    },
    Total_Documento: {
      type: "DOUBLE",
      allowNull: true
    },
    Total_Desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    Total_NaoTributado: {
      type: "DOUBLE",
      allowNull: true
    },
    Total_Prestacao: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Emissao_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Emissao_Cidade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Emissao_IBGE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Inicio_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Inicio_Cidade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Inicio_IBGE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Termino_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Termino_Cidade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Termino_IBGE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Coi_Categoria: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Coi_Descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HoraEmissao: {
      type: DataTypes.TIME,
      allowNull: true
    },
    PrevisaoChegada: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IndicadorLotacao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TipoServico: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FormaPagamento: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ValorCarga: {
      type: "DOUBLE",
      allowNull: true
    },
    ProdutoPredominante: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Informacoes: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Status_Receita: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Cte_Emissao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Seg_respSeg: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Seg_xSeg: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Seg_nApol: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Seg_nAver: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Seg_vCarga: {
      type: "DOUBLE",
      allowNull: true
    },
    Motorista_Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Motorista_Nome: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Motorista_CPF: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    RetornoErro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AmbienteCTe: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    cStatus: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NAutorizacao: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DigVal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHoraAutorizacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VerAplic: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    VersaoXML: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TomadorServico: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IDLote: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Canc_NAutorizacao: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Canc_DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Canc_Motivo: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    InfoAdicional: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    PesoRealCarga: {
      type: "DOUBLE",
      allowNull: true
    },
    Pedagio_valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Pedagio_Enviar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Subs_ChaveCte: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Subs_ContribuiICMS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Subs_ChaveAnulacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Subs_ChaveCteTomador: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Subs_ChaveNFeTomador: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Subs_CNPJTomador: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Subs_SerieTomador: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Subs_SubSerieTomador: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Subs_NumeroTomador: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    Subs_ValorTomador: {
      type: "DOUBLE",
      allowNull: true
    },
    Subs_DataEmissaoTomador: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Subs_Modelo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Anulacao_Chave: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Anulacao_Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    xObs: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    vBCUFFim: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pFCPUFFim: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pICMSUFFim: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pICMSInter: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pICMSInterPart: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    vFCPUFFim: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    vICMSUFFim: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    vICMSUFIni: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    verProc: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CategoriaPagamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    indSN: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DescricaoServico: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    QtdeCargaCTeOS: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    UTC_DataAutorizacao: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    indGlobalizado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Rem_Diversos: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Dest_Diversos: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    TAF: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NumRegEstadual: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Aliq_IR: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Valor_IR: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Aliq_INSS: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Valor_INSS: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Aliq_CSLL: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Valor_CSLL: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Base_IcmsST_Ret: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Aliq_IcmsST_Ret: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Valor_IcmsST_Ret: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tpEmis: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cCT: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Retira: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IDEmitente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    VersaoMy: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    UTC_DataEmissao: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TipoFretamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DataHoraViagem: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PedagioOutros: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    PedagioTributar: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Erro_ServidorSefaz: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ValorFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorDescarga: {
      type: "DOUBLE",
      allowNull: true
    },
    TributarDescarga: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    EnvRespTec: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'ctrc_saida'
  });
};
