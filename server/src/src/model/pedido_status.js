/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedido_status', {
    StatusID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PedidoID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  }, {
    tableName: 'pedido_status'
  });
};
