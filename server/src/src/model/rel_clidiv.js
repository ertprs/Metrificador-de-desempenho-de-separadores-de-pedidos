/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_clidiv', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Motivo: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'rel_clidiv'
  });
};
