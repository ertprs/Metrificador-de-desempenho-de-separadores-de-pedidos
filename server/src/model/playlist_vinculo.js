/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('playlist_vinculo', {
    CodigoVideo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCategoria: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'playlist_vinculo'
  });
};
