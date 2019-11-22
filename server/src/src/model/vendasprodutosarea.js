/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendasprodutosarea', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SeqProdVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Titulo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Comprimento: {
      type: "DOUBLE",
      allowNull: true
    },
    Largura: {
      type: "DOUBLE",
      allowNull: true
    },
    Profundidade: {
      type: "DOUBLE",
      allowNull: true
    },
    Unidades: {
      type: "DOUBLE",
      allowNull: true
    },
    Area: {
      type: "DOUBLE",
      allowNull: true
    },
    Status: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'vendasprodutosarea'
  });
};
