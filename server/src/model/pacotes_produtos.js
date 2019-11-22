/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pacotes_produtos', {
    CodPacote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodTabela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Preco: {
      type: "DOUBLE",
      allowNull: false
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: false
    },
    ValorCusto: {
      type: "DOUBLE",
      allowNull: false
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PrecoTabela: {
      type: "DOUBLE",
      allowNull: false
    },
    Bonificacao: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'pacotes_produtos'
  });
};
