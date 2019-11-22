/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cargas_rentabilidade', {
    idCarga: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    TotalVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdePedidos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TotalDevolucao: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeDevolucao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TotalDespesas: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalCustoMercadoria: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    KmSaida: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    KmChegada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeLitros: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeCidades: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeClientes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeNF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TotalNF: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalIcms: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalIcmsST: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalPis: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalCofins: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalIcms_Custo: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalPis_Custo: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalCofins_Custo: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalCustoFaturado: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'cargas_rentabilidade'
  });
};
