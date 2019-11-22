/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movimentacaoprodutoscomposicao', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SeqProdVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IDProdutoPrincipal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    QtdePrincipal: {
      type: "DOUBLE",
      allowNull: false
    },
    IdPRodutoComp: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    QtdeProdComp: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Operacao: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Identificador: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'movimentacaoprodutoscomposicao'
  });
};
