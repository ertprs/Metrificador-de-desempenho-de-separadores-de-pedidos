/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_valorvendamedio', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ValorVendaMedio: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalVendaProduto: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_valorvendamedio'
  });
};
