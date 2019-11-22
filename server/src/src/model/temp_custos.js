/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_custos', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Custo: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_custos'
  });
};
