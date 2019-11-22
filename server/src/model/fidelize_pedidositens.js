/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fidelize_pedidositens', {
    CodigoBarras: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Qtde: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PercentualUnitario: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: true
    },
    PrazoProdutos: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FlagMonitorado: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Processado: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IDPedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    QtdeAtendida: {
      type: "DOUBLE",
      allowNull: true
    },
    Motivo: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PMC: {
      type: "DOUBLE",
      allowNull: true
    },
    PrecoTabela: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeCancelada: {
      type: "DOUBLE",
      allowNull: true
    },
    MotivoCancelada: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CodProdDist: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    TipoEmbalagem: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ValorDescUnit: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorLiquidoUnit: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorBrutoUnit: {
      type: "DOUBLE",
      allowNull: true
    },
    TipoDesconto: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'fidelize_pedidositens'
  });
};
