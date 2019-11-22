/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cidades_localizacao', {
    CODIGO_IBGE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    LATITUDE: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    LONGITUDE: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'cidades_localizacao'
  });
};
