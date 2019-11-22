/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_order_processed', {
    order_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    number: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    series: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    access_key: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id_loja: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'v_yh_order_processed'
  });
};
