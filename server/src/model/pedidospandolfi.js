/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidospandolfi', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Pedido: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DataFornecedor: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataRemessa: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataImportacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Situacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoTabela: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataAceite: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoPreVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    LiberadoEntrega: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'pedidospandolfi'
  });
};
