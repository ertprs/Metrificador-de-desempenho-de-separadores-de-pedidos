/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notafiscalservico_itens', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoNota: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    idServico: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    DescricaoServico: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: false
    },
    VlrUnitario: {
      type: "DOUBLE",
      allowNull: false
    },
    VlrTotal: {
      type: "DOUBLE",
      allowNull: false
    },
    Natureza_BC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    BaseNFS: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBaseNFS: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    BaseISS: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBaseISS: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    BasePis: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBasePis: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    BaseCofins: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBaseCofins: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorNFS: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorISS: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorPis: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorCofins: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PercISS: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PercPis: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PercCofins: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    CSTPis: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CSTCofins: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    BaseNFSFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBaseNFSFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    BaseISSFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBaseISSFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    BasePisFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBasePisFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    BaseCofinsFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBaseCofinsFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorNFSFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorISSFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorPisFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorCofinsFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PercISSFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PercPisFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PercCofinsFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    CSTPisFonte: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CSTCofinsFonte: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CodigoOS: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    BaseIRRFFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBaseIRRFFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PercIRRFFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorIRRFFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    BaseCSLLFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBaseCSLLFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PercCSLLFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorCSLLFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    BaseINSSFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBaseINSSFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PercINSSFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorINSSFonte: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    BaseIRRF: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBaseIRRF: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PercIRRF: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorIRRF: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    BaseCSLL: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBaseCSLL: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PercCSLL: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorCSLL: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    BaseINSS: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorBaseINSS: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PercINSS: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorINSS: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    AumentaNota: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    CFOP_PROD: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DescontoIncondicionado: {
      type: "DOUBLE",
      allowNull: true
    },
    ImpostoNaoDiminuiConta: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'notafiscalservico_itens'
  });
};
