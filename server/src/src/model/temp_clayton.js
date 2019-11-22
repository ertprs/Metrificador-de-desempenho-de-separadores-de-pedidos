/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_clayton', {
    CodigoProduto: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Ref: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_clayton'
  });
};
