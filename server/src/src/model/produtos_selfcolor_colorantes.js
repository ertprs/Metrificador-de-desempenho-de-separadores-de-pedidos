/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_selfcolor_colorantes', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    COD_PROD_INTERNO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    COD_COLORANTE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SIGLA_COLORANTE: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    DES_COLORANTE: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'produtos_selfcolor_colorantes'
  });
};
