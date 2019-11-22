/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('complementos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'complementos'
  });
};
