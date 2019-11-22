/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_alteracao_produtos', {
    IdLog: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Campo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    De: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Para: {
      type: DataTypes.STRING(200),
      allowNull: false
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
    tableName: 'log_alteracao_produtos'
  });
};
