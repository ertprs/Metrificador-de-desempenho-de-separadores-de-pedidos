/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('playlist_videos', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    URL_Video: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    URL_Img: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Video_Descricao: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    tableName: 'playlist_videos'
  });
};
