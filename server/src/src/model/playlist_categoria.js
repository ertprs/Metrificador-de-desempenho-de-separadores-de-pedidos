/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('playlist_categoria', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    tableName: 'playlist_categoria'
  });
};
