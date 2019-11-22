/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelas_preco_produto_promocao', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDTabela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Data_Inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Data_Fim: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    QtdeMin: {
      type: "DOUBLE",
      allowNull: false
    },
    Preco: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'tabelas_preco_produto_promocao'
  });
};
