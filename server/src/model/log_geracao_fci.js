/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_geracao_fci', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Arquivo: {
      type: DataTypes.STRING(400),
      allowNull: false
    }
  }, {
    tableName: 'log_geracao_fci'
  });
};
