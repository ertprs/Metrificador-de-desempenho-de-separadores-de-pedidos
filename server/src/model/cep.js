/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cep', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDCidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CEP: {
      type: DataTypes.STRING(11),
      allowNull: false
    }
  }, {
    tableName: 'cep'
  });
};
