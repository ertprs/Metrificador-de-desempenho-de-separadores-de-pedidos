/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtospolicia', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Densidade: {
      type: "DOUBLE",
      allowNull: true
    },
    Concentracao: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'produtospolicia'
  });
};
