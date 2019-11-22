/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acertoestoquegrade', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDAcerto: {
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
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TIpo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'acertoestoquegrade'
  });
};
