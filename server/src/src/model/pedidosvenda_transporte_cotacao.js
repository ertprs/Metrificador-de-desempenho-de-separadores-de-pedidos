/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidosvenda_transporte_cotacao', {
    pvtc_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pvtc_codigo_transportadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    pvtc_pvt_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    pvtc_valor_frete: {
      type: "DOUBLE UNSIGNED",
      allowNull: true
    },
    pvtc_codigo_pedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'pedidosvenda_transporte_cotacao'
  });
};
