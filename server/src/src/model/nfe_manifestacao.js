/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfe_manifestacao', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CHAVE: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    SERIE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NOME: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    IE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DATA_EMISSAO: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DATA_AUTORIZACAO: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    VALOR: {
      type: "DOUBLE",
      allowNull: false
    },
    TIPO_NF: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    digVal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Situacao_NF: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Situacao_Manifesto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    NSU: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    MsgErro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Download_XML: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    NSUDFe: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    xmlExcluido: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'nfe_manifestacao'
  });
};
