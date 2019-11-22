/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conexao_mysql', {
    IDConexao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'conexao_mysql'
  });
};
