/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_sellout_payment_installments', {
    store_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    sellout_timestamp: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    payment_method_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    installment_number: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    amount: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    payment_term: {
      type: DataTypes.INTEGER(7),
      allowNull: true
    }
  }, {
    tableName: 'v_yh_sellout_payment_installments'
  });
};
