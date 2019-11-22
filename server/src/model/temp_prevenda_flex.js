/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_prevenda_flex', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoPedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_prevenda_flex'
  });
};
