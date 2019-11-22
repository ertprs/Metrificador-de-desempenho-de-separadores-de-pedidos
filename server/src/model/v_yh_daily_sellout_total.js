/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_daily_sellout_total', {
    store_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ''
    },
    quantity: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    amount: {
      type: "DOUBLE(21,4)",
      allowNull: true
    }
  }, {
    tableName: 'v_yh_daily_sellout_total'
  });
};
