/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_decretos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_Produto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Decretos: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'produtos_decretos'
  });
};
