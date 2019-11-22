/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('convenio', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    tableName: 'convenio'
  });
};
