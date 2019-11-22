/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_653_temp_venda', {
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    TotalVendas: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeComp: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_653_temp_venda'
  });
};
