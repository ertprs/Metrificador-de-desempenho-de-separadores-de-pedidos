/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_sellin_payment', {
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
    payment_method_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    method: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    condition: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    valor: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    parcela: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    prazo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    operation_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    authorization: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'v_yh_sellin_payment'
  });
};
