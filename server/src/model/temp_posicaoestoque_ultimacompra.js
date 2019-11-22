/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_posicaoestoque_ultimacompra', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: true
    },
    DataEntrada: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'temp_posicaoestoque_ultimacompra'
  });
};
