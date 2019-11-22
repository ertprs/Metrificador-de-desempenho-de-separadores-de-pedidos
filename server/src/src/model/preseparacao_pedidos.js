/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preseparacao_pedidos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdSeparacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoPedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'preseparacao_pedidos'
  });
};
