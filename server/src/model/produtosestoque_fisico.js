/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtosestoque_fisico', {
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Estoque_Fisico: {
      type: "DOUBLE",
      allowNull: true
    },
    Estoque_Entregar: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'produtosestoque_fisico'
  });
};
