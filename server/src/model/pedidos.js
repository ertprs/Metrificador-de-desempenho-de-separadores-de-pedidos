/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidos', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pedidoConcluido: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    pedidoFinalizado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    dataPedido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    codigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    valorTotal: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: '0'
    },
    formaParcelamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Processado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Site: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IDTabPreco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    EmpresaID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'pedidos'
  });
};
