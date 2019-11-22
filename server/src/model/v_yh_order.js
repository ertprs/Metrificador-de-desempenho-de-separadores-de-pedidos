/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_order', {
    store_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    order_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    create_at: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    update_at: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    subtotal: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    grand_total: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    freight_cost: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    discount_value: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    payment_method: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    payment_plan: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    customer_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'v_yh_order'
  });
};
