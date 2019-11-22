/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfse_config', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: '0'
    },
    UltimaNFSe: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Ambiente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Versao: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: '0'
    },
    Status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    TipoCertificado: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    },
    CertificadoA1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CertificadoA3: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Senha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UltimoLote: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    UltimoRps: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    CodigoLote: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CodigoRps: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TipoEnvio: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    EnderecoPrefeitura: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    CodigoProvedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NumeroTentativa: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    CertificadoDLL: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    AgrupaServico: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    MandaEmailDireto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    AbreEmail: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    AbreImpressao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    EmpresaFaturar: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Login: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SenhaSite: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CK_Migrate: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NaoMandaISS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CodVerificacaoRPS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NaoMandaPisCofins: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    ImprimeDuplicata: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    TributaISSFR: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    SemTomador: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    EmailEmBranco: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    ExigeDeducao: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    NaoInformarPrestador: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    UsaCertificadoImpressao: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    MigrateQuedas: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    DeducaoSemNota: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    ValorISSRetencao: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    SimplesNacional: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    QuantidadeUm: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    ImpostoNaoDiminuiConta: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    4CasasDecimaisISS: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    FaturaEenvia: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    PessoaFisicaIPM: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    NaoMandaPisCofinsJuridica: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    ArredondaABNT: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    RespRetencao: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    ComboLocalPrestacao: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    NaoMandaFaturaVencida: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    NaoMandaPisCofinsProdutorRural: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    MandaFaturaOBS: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    AutorizaNotaRejeitada: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    ProtocoloAgendamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'nfse_config'
  });
};
