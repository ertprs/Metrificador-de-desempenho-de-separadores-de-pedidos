/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_totalcompras', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TotalCompras: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_totalcompras'
  });
};
