/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_resumofinanceiro', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Apuracao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    C_Receber: {
      type: "DOUBLE",
      allowNull: true
    },
    C_Recebidas: {
      type: "DOUBLE",
      allowNull: true
    },
    C_Apagar: {
      type: "DOUBLE",
      allowNull: true
    },
    C_ChqApagar: {
      type: "DOUBLE",
      allowNull: true
    },
    C_Pagas: {
      type: "DOUBLE",
      allowNull: true
    },
    Vendas: {
      type: "DOUBLE",
      allowNull: true
    },
    Compras: {
      type: "DOUBLE",
      allowNull: true
    },
    PedCompras: {
      type: "DOUBLE",
      allowNull: true
    },
    NFFaturadas: {
      type: "DOUBLE",
      allowNull: true
    },
    Inadimplencia: {
      type: "DOUBLE",
      allowNull: true
    },
    PedComprasAberto: {
      type: "DOUBLE",
      allowNull: true
    },
    Produtos: {
      type: "DOUBLE",
      allowNull: true
    },
    Servicos: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'rel_resumofinanceiro'
  });
};
