/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notafiscalservico', {
    Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Status: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    Tipo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DataEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataConclusao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NNota: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ChaveNF: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    idCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    OutrasInformacoes: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    FormaPag: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BaseNFS: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseISS: {
      type: "DOUBLE",
      allowNull: true
    },
    BasePis: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseCofins: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorNFS: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorISS: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPis: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCofins: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseNFSFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseISSFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    BasePisFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseCofinsFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorNFSFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorISSFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPisFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCofinsFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CFOP: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    NfseVersao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NfseCodigoVerificacao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NfseDataEmissao: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    NfseStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExigibilidadeIss: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    IssRetido: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ItemListaServico: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    DescontoIncondicionado: {
      type: "DOUBLE",
      allowNull: true
    },
    DescontoCondicionado: {
      type: "DOUBLE",
      allowNull: true
    },
    Artigo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CodigoObra: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IncentivoFiscal: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    TipoRPS: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CodigoOS: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    OutrasRetencoes: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCSLL: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorIRRF: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorINSS: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotalServico: {
      type: "DOUBLE",
      allowNull: true
    },
    ResponsavelRecolhimento: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ValorOutrasDeducoes: {
      type: "DOUBLE",
      allowNull: true
    },
    NumeroRPS: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    NumeroLote: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Protocolo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Situacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NumeroOS: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DataCancelamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Cancelada: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MotivoCancelamento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    motivoRejeicao: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    CodTribMunicipio: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TextoXml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cdAutenticacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TextoXmlRPS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    linkImpressao: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    TextoXmlGera: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ValorBasePis: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    ValorBaseCofins: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    LocalPrestacao: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: '1'
    },
    OperacaoTributacao: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    },
    NumeroProcesso: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    StatusRPS: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: '1'
    },
    IncentivadorCultural: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: '2'
    },
    EmpreitadaGlobal: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: '2'
    },
    ItemTributavel: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    Operacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UnidadeMedida: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Alvara: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TipoDeducao: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    AliquotaINSS: {
      type: "DOUBLE",
      allowNull: true
    },
    AliquotaIR: {
      type: "DOUBLE",
      allowNull: true
    },
    AliquotaCSLL: {
      type: "DOUBLE",
      allowNull: true
    },
    NumeroRPSSub: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    SerieRPSSub: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TipoRPSSub: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NumeroNFSeSub: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RefCPF: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RefCNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RefNumero: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RefValor: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseCSLL: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorBaseCSLL: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseIRRF: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorBaseIRRF: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseINSS: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorBaseINSS: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseCSLLFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCSLLFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseIRRFFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorIRRFFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseINSSFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorINSSFonte: {
      type: "DOUBLE",
      allowNull: true
    },
    JustificativaDeducao: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'notafiscalservico'
  });
};
