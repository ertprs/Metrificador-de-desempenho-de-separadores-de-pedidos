/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaocomprasresultado', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nCotacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Custo: {
      type: "DOUBLE",
      allowNull: true
    },
    IPI: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalOutros: {
      type: "DOUBLE",
      allowNull: true
    },
    Pfrete: {
      type: "DOUBLE",
      allowNull: true
    },
    POutros: {
      type: "DOUBLE",
      allowNull: true
    },
    CustoFinal: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'cotacaocomprasresultado'
  });
};
