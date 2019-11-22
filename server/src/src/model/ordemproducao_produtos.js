/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordemproducao_produtos', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NProducao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDGrade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Linha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Coluna: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeSugerida: {
      type: "DOUBLE",
      allowNull: true
    },
    Estoque: {
      type: "DOUBLE",
      allowNull: true
    },
    nLoteItem: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde_Pedido: {
      type: "DOUBLE",
      allowNull: true
    },
    Qtde_emProd: {
      type: "DOUBLE",
      allowNull: true
    },
    Qtde_Entregar: {
      type: "DOUBLE",
      allowNull: true
    },
    GerouVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeVendaGerada: {
      type: "DOUBLE",
      allowNull: true
    },
    SequenciaProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ObsProduto: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    QtdeBaixadaComposicao: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'ordemproducao_produtos'
  });
};
