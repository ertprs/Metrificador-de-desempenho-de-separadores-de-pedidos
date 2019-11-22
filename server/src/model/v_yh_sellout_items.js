/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_sellout_items', {
    store_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    sellout_timestamp: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    SKU: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    code: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    isbn: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ''
    },
    description: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    cancellation_flag: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: ''
    },
    item_addition: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    frete: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    item_discount: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    ipi: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    icms: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    item_icms_st: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    pis: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    cofins: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    measurement_unit: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    unit_value: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    quantity: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    cfop: {
      type: DataTypes.STRING(6),
      allowNull: false
    }
  }, {
    tableName: 'v_yh_sellout_items'
  });
};
