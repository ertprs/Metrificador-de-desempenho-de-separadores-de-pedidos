/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comissaoporlinha_tabpreco', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDLinhaComissao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    idTabela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Aliquota: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'comissaoporlinha_tabpreco'
  });
};
