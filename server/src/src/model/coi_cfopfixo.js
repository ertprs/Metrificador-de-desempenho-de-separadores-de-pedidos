/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coi_cfopfixo', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idCoi: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CFOP: {
      type: DataTypes.STRING(5),
      allowNull: false
    }
  }, {
    tableName: 'coi_cfopfixo'
  });
};
