/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdfe_condutores', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_MDFe: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Nome: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    CPF: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    tableName: 'mdfe_condutores'
  });
};
