/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_sellin_item', {
    store_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    sellin_timestamp: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    code: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
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
    ean: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    addition: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    discount: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    net_total: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    measurement_unit: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    gross_total: {
      type: "DOUBLE(21,4)",
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
    manufacturer_code: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    icms: {
      type: "DOUBLE(21,4)",
      allowNull: true
    }
  }, {
    tableName: 'v_yh_sellin_item'
  });
};
