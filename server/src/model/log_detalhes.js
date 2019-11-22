/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_detalhes', {
    Id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idLog: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Campo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    De: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Para: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    tableName: 'log_detalhes'
  });
};
