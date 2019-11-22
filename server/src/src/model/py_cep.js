/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('py_cep', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idCidade: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    tableName: 'py_cep'
  });
};
