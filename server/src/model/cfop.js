/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cfop', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CFOP: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Desc_Completa: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Versao: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'cfop'
  });
};
