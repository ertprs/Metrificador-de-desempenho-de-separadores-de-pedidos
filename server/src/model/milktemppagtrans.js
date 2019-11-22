/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milktemppagtrans', {
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
    Periodo: {
      type: DataTypes.STRING(45),
      allowNull: true
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
    idTrans: {
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
    },
    Mes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Ano: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Modalidade: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    idMod: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataCancelado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TotalOcorrenciaAcumulado: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    DebitoReaisAdiantamento: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    VlrFrete: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'milktemppagtrans'
  });
};
