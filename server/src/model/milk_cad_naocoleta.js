/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milk_cad_naocoleta', {
    IdNaoColeta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MotivoNaoColeta: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: '0'
    },
    Status: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    tableName: 'milk_cad_naocoleta'
  });
};
