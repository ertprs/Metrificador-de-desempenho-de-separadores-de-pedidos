/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milktempvalortransportador', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ValorComissao: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    ValorPelaDiferenca: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    Decre: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Reais: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    Quantidade: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    EntradaRomaneioTransportador: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    DiferencaEntrada: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    EmpresaCnpj: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    EmpresaNome: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Previa: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Periodo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DebitoReais: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    DebitoQuantidade: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    CreditoReais: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    CreditoQuantidade: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    CodigoTransportador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeTransportador: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TotalComissao: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    TotalDiferenca: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    TotalGeral: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    }
  }, {
    tableName: 'milktempvalortransportador'
  });
};
