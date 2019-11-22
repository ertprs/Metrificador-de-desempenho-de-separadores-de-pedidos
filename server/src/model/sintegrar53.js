/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sintegrar53', {
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
    DataRecebimento: {
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
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CFOP: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Emitente: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BaseCalculoICMSSubstituicao: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    ICMSRetido: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    DespesasAcessorias: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    Situacao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CodigoAntecipacao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Brancos: {
      type: DataTypes.STRING(29),
      allowNull: true
    }
  }, {
    tableName: 'sintegrar53'
  });
};
