/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cores', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    NomeCor: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Cor: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'cores'
  });
};
