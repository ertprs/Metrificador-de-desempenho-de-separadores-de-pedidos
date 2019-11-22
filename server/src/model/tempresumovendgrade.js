/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tempresumovendgrade', {
    Linha: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    Coluna: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    QtdeV: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeC: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    IDGrade: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    TpM: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'tempresumovendgrade'
  });
};
