/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_sellout_payment', {
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
    payment_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    method: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    condition: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ''
    },
    authorization: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'v_yh_sellout_payment'
  });
};
