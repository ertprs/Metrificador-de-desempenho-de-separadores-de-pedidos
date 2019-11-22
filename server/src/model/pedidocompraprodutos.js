/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidocompraprodutos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Npedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IDProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Emb: {
      type: "DOUBLE",
      allowNull: false
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false
    },
    Custo: {
      type: "DOUBLE",
      allowNull: false
    },
    PIPI: {
      type: "DOUBLE",
      allowNull: false
    },
    Baixado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataRecebido: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NFRecebido: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Cor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Voltagem: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ObsProd: {
      type: DataTypes.STRING(275),
      allowNull: true
    },
    IDEntradaRecebido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PST: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    PVendor: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    DataPrevisao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    QtdeBaseSugestao: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Unidade: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ValorCustoFinal: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeParcialBaixada: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    TotalGeral: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'pedidocompraprodutos'
  });
};
