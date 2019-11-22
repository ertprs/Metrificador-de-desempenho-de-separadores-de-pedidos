/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sintegra_invet_estoqueinicial', {
    CodigoProduto: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    EstoqueInicial: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'sintegra_invet_estoqueinicial'
  });
};
