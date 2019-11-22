/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_tr_financeira', {
    transaction_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ccflag_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    operation_id: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    sale_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pay_sto_dt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sales_value: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    discount_value: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    store_value: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    transaction_status: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ''
    },
    payment_status: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ''
    },
    nsu: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    authorization: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'v_yh_tr_financeira'
  });
};
