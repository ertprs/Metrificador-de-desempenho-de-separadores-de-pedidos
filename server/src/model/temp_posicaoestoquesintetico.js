/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_posicaoestoquesintetico', {
    IDFornecedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ValorTotalEstoque: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ValorEstoque: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorEntrada: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorVenda: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_posicaoestoquesintetico'
  });
};
