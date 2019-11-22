/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('motivosperdas', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Excluido: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'motivosperdas'
  });
};
