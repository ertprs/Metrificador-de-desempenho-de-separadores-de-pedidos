/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tiles_visao', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Grupo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    UserLocal: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    icone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    idVisual: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tiles_visao'
  });
};
