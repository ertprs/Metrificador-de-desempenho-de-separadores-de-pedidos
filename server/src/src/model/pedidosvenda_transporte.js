/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidosvenda_transporte', {
    pvt_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pvt_codigo_pedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    pvt_codigo_transportadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    pvt_frete_conta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    pvt_valor_frete: {
      type: "DOUBLE UNSIGNED",
      allowNull: true
    },
    pvt_placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    pvt_uf: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    pvt_codigo_antt: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pvt_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pvt_terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pvt_faturamento: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    pvt_faturamento_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pvt_faturamento_data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pvt_codigo_venda: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pvt_sequencia_nota: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'pedidosvenda_transporte'
  });
};
