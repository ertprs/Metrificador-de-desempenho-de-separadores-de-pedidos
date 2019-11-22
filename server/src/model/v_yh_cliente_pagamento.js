/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_cliente_pagamento', {
    id_cliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    title: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    pay_opt: {
      type: DataTypes.STRING(26),
      allowNull: true
    },
    id_loja: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'v_yh_cliente_pagamento'
  });
};
