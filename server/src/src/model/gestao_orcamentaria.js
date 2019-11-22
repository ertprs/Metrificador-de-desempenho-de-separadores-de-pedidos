/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gestao_orcamentaria', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDSubConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    MesAno: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'gestao_orcamentaria'
  });
};
