/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('py_departamentos', {
    coddepartamento: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    departamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'py_departamentos'
  });
};
