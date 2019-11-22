/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tamanhos', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Tamanho: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'tamanhos'
  });
};
