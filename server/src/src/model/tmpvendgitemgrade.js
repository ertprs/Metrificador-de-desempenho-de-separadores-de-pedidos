/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpvendgitemgrade', {
    Linha: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    Coluna: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    Referencia: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NomeLinha: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NomeColuna: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    tableName: 'tmpvendgitemgrade'
  });
};
