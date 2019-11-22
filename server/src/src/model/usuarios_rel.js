/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios_rel', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PAI: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    F1: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    F2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    F3: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    F4: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    F5: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    campo: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    FULL: {
      type: DataTypes.STRING(245),
      allowNull: false
    }
  }, {
    tableName: 'usuarios_rel'
  });
};
