/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_sellin', {
    store_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    supplier_taxpayer_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    sellin_timestamp: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    nfe_access_key: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    other_expenses: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    seller_id: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ''
    },
    ipi: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    sales_discount: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    insurance_price: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    gross_total: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    cancellation_flag: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    nfe_series_number: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    nfe_number: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    sales_addition: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    store_taxpayer_id: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    net_total: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    freight_price: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    icms: {
      type: "DOUBLE(21,4)",
      allowNull: true
    }
  }, {
    tableName: 'v_yh_sellin'
  });
};
