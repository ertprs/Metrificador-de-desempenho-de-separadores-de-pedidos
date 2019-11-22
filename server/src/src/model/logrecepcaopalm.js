/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logrecepcaopalm', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Vendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NPedidos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TotalPedidos: {
      type: "DOUBLE",
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NClientes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NMsg: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NNaoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Concluido: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    PedidoEletronico: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    NContatos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NContas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'logrecepcaopalm'
  });
};
