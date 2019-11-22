/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_thiago_expedicao01-pc', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Estoque: {
      type: "DOUBLE",
      allowNull: true
    },
    Un: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    QtdeVendasPeriodo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    QtdeEntradasPeriodo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    UltimaVenda: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    UltimaEntrada: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'temp_thiago_expedicao01-pc'
  });
};
