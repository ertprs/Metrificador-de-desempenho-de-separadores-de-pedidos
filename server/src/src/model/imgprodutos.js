/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imgprodutos', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Imagem: {
      type: "LONGBLOB",
      allowNull: true
    },
    Descritivo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Url: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoGrade: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoLinha: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoColuna: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'imgprodutos'
  });
};
