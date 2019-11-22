/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaocompras_forn', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NCotacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CotacaoObsResposta: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CotacaoDataResposta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CotacaoChaveEnvio: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JsonCotacao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cancelado: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Notificado: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cotacaocompras_forn'
  });
};
