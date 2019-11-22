/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_etiquetas_produtos', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqLogEtiqueta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoGrade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoLinha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoColuna: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodBarras: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    Obs: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NomeLote: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'log_etiquetas_produtos'
  });
};
