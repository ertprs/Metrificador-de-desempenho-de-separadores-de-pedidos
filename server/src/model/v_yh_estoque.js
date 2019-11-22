/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_estoque', {
    quantidade: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    em_estoque: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    produto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    id_loja: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    dt_ultima_alt: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    tableName: 'v_yh_estoque'
  });
};
