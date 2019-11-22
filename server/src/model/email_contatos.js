/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_contatos', {
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'email_contatos'
  });
};
