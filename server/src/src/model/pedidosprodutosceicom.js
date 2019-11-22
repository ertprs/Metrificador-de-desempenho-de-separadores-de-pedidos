/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidosprodutosceicom', {
    ppc_pce_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    PPC_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ppc_valor_sub_total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ppc_quantidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ppc_valor_desconto: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ppc_valor_total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ppc_pce_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'pedidosprodutosceicom'
  });
};
