/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comissaoporlinha', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    Aliquota: {
      type: "DOUBLE",
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Mista: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'comissaoporlinha'
  });
};
