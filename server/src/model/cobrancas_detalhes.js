/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cobrancas_detalhes', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Ndoc: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Cliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ValorPendente: {
      type: "DOUBLE(18,2)",
      allowNull: true
    },
    ValorJuros: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SequenciaCR: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Pago_Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Pago_Desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    Modalidade: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    PerComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorBase: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    nDias: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ReciboManual: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'cobrancas_detalhes'
  });
};
