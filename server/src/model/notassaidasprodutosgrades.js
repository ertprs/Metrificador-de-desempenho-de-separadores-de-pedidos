/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notassaidasprodutosgrades', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqProdNota: {
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
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    UltimaNF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Identificador: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'notassaidasprodutosgrades'
  });
};
