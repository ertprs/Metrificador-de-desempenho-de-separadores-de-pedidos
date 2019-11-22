/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_alteracao_dfe', {
    IdLog: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Tabela: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Serie: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Campo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    De: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Para: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'log_alteracao_dfe'
  });
};
