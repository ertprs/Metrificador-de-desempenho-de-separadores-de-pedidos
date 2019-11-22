/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chequest_origem', {
    Descricao: {
      type: DataTypes.STRING(75),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'chequest_origem'
  });
};
