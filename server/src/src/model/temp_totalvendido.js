/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_totalvendido', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TotalVendido: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_totalvendido'
  });
};
