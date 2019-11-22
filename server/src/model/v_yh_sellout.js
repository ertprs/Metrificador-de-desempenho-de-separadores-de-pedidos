/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_sellout', {
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
    nome_operador: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nome_vendedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    store_taxpayer_id: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    buyer_taxpayer_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    checkout_id: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    receipt_number: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    receipt_series_number: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    nfe_access_key: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    sales_addition: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ''
    },
    sales_discount: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ''
    },
    subtotal: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    cancellation_flag: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: ''
    },
    operation: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ipi: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    frete: {
      type: "DOUBLE(21,4)",
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    tableName: 'v_yh_sellout'
  });
};
