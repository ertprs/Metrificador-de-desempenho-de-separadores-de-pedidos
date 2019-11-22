/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gerenciadorimpressao', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Impressora: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Texto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Erro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Arquivo: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'gerenciadorimpressao'
  });
};
