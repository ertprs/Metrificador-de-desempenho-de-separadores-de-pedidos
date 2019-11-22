/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfse_provedor', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'nfse_provedor'
  });
};
