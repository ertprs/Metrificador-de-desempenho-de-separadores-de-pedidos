/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('info', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    UltimoBackup: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'info'
  });
};
