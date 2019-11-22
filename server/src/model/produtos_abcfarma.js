/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_abcfarma', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EAN: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    Aliquota: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PMC: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PF: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ALC: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'produtos_abcfarma'
  });
};
