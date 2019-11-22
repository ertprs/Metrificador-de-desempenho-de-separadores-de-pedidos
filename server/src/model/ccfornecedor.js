/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccfornecedor', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idFornec: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    Valor: {
      type: "DOUBLE(11,2)",
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Hora: {
      type: DataTypes.TIME,
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
    Usuario_Excluiu: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Terminal_Excluiu: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DataExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NfReferente: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Obs: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'ccfornecedor'
  });
};
