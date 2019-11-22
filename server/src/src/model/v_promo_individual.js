/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_promo_individual', {
    CodigoProduto: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ID: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'v_promo_individual'
  });
};
