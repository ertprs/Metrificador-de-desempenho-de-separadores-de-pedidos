/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carrinho', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    valorUnitario: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    quantidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    codigoUsuario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    subTotal: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    valorFrete: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: '0'
    },
    hash: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pedidoEmAndamento: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    desconto: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    ValorICMSST: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'carrinho'
  });
};
