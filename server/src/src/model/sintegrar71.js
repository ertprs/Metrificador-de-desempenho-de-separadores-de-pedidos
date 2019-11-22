/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sintegrar71', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CNPJ: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    IE: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    DataEmissao: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SubSerie: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Destinatario_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Destinatario_CNPJ: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Destinatario_IE: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    DataEmissaoNota: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ModeloNotaFiscal: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SerieNotaFiscal: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NumeroNotaFiscal: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ValorTotalNotaFiscal: {
      type: DataTypes.STRING(14),
      allowNull: true
    }
  }, {
    tableName: 'sintegrar71'
  });
};
