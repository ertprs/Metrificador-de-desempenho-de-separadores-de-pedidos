/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mesas', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Numero: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    }
  }, {
    tableName: 'mesas'
  });
};
