/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reducao60m', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Subtipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DataEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NumeroSerie: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NumeroSequencia: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ModeloFiscal: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NumeroCOOInicial: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NumeroCOOFinal: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NumeroContadorReducaoZ: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ContadorReinicioOP: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ValorVendaBruta: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    ValorTotalizadorGeral: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    Brancos: {
      type: DataTypes.STRING(37),
      allowNull: true
    },
    ContadorReincioOP: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ModeloECF: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    COO_ReducaoZ: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    tableName: 'reducao60m'
  });
};
