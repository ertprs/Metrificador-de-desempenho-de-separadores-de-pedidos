/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servidores_ignore', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Tabela: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    IDServer: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'servidores_ignore'
  });
};
