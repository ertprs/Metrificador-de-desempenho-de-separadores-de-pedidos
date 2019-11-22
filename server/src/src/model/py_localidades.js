/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('py_localidades', {
    codlocalidad: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    localidad: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    coddistrito: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'py_localidades'
  });
};
