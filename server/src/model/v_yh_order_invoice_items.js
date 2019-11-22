/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_order_invoice_items', {
    store_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    order_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    code: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ean: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    price: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    qty: {
      type: "DOUBLE",
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    tableName: 'v_yh_order_invoice_items'
  });
};
