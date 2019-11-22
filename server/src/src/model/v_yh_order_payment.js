/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_order_payment', {
    store_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    order_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    payment_method: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    payment_amount: {
      type: "DOUBLE(21,4)",
      allowNull: true
    }
  }, {
    tableName: 'v_yh_order_payment'
  });
};
