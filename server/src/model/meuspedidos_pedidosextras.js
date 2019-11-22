/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meuspedidos_pedidosextras', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sequencia_pedido: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    campo_extra_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    valor: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'meuspedidos_pedidosextras'
  });
};
