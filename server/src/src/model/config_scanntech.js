/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_scanntech', {
    CSC_EMPRESA: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    CSC_ID_EMPRESA_SCANNTECH: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CSC_ID_LOCAL: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CSC_URL_BASE1: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    CSC_URL_BASE2: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    CSC_URL_BASE3: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    CSC_USUARIO: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CSC_SENHA: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CSC_HOMOLOGACAO: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    CSC_INTERVALO_SINCRONIZACAO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CSC_MAX_REGISTROS_LOTE: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    }
  }, {
    tableName: 'config_scanntech'
  });
};
