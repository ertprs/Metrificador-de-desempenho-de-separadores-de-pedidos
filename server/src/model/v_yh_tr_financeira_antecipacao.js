/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_tr_financeira_antecipacao', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tax: {
      type: "DOUBLE",
      allowNull: true
    },
    discount_value: {
      type: "DOUBLE(19,2)",
      allowNull: true
    },
    id_loja: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'v_yh_tr_financeira_antecipacao'
  });
};
