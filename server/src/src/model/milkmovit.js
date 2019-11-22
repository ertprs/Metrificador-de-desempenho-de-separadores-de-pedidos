/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkmovit', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idTrans: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    N_Trans: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
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
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    EmpresaNome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EmpresaCnpj: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    DataCancelado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UsuarioCancelou: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VlrFrete: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'milkmovit'
  });
};
