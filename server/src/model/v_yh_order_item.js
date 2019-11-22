/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_order_item', {
    store_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    order_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    sku: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    code: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    quantity: {
      type: "DOUBLE",
      allowNull: true
    },
    unit_value: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    item_discount: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    item_addition: {
      type: "DOUBLE(21,4)",
      allowNull: true
    }
  }, {
    tableName: 'v_yh_order_item'
  });
};
