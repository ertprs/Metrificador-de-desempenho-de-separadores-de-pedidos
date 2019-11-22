/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('centralizador_cr', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'centralizador_cr'
  });
};
