/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_composicao', {
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    UN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    CustoUnitario: {
      type: "DOUBLE",
      allowNull: true
    },
    CustoTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoLinha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    Linha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    P_Perca: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Coluna: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'produtos_composicao'
  });
};
