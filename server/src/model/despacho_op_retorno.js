/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('despacho_op_retorno', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoDespacho: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataRetorno: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraRetorno: {
      type: DataTypes.TIME,
      allowNull: true
    },
    NparesRetorno: {
      type: "DOUBLE",
      allowNull: true
    },
    Total: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    NomeProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ValorPeca: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'despacho_op_retorno'
  });
};
