/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processo_judicial', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TipoProcesso: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Situacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    OrigemProcesso: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    NumeroProcesso: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    DataSentenca: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    SecaoJudiciaria: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Vara: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    NaturezaAcao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'processo_judicial'
  });
};
