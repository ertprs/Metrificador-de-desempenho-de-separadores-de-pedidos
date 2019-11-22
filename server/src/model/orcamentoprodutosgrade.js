/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orcamentoprodutosgrade', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDOrcamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqOrcamentoProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDGrade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Linha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Coluna: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    Baixado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqPedOrcamentoProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'orcamentoprodutosgrade'
  });
};
