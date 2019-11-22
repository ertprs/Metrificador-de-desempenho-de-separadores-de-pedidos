/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fabricantes', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'fabricantes'
  });
};
