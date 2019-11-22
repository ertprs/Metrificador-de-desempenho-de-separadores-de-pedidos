/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendedoresmarcas', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoMarca: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'vendedoresmarcas'
  });
};
