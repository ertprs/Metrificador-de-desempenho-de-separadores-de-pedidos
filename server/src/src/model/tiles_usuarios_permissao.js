/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tiles_usuarios_permissao', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_TILE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ID_USUARIO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PERMITE_VISUALIZACAO: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'tiles_usuarios_permissao'
  });
};
