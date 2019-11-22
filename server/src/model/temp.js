/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp', {
    idNewTable: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Q_V: {
      type: "DOUBLE",
      allowNull: true
    },
    Q_E: {
      type: "DOUBLE",
      allowNull: true
    },
    Q_ATUAL: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp'
  });
};
