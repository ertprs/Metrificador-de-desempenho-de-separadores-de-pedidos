/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidocompraprodutosinfobaixas', {
    Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDPedidocompraprodutos: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    DataRecebido: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NFRecebido: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false
    },
    Entrada: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'pedidocompraprodutosinfobaixas'
  });
};
