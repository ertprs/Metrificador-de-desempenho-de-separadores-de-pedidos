/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tiles_visao_det', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDVisao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IDTile: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    idTilesVisual: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    idVisual: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Ordem: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '99999'
    }
  }, {
    tableName: 'tiles_visao_det'
  });
};
