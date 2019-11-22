/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cartaomovimento', {
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
    CodigoOperadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CV: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NParcelas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Parcela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Tarifa: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorLiquido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Prazo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataPrevisao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataLiquidacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoContaLiq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodMovimento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqNFAvulsa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDValeCompra: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCarga: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ClienteCarga: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PercentualDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorDesconto: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    TEF: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    PercentualAcrescimo: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorAcrescimo: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ValorTaxaOperacao: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoAntecipacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoBaixaCartao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SeqCaixaMovFormas: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CMO_UUID_PDV: {
      type: "BINARY(16)",
      allowNull: true
    }
  }, {
    tableName: 'cartaomovimento'
  });
};
