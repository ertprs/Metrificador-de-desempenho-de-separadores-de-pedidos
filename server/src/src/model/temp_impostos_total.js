/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_impostos_total', {
    Total: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_impostos_total'
  });
};
