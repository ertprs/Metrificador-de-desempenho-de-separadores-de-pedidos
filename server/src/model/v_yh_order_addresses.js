/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_order_addresses', {
    store_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    order_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    zipcode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    address_type: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ''
    },
    address_number: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    address_extra: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    neighborhood: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    tableName: 'v_yh_order_addresses'
  });
};
