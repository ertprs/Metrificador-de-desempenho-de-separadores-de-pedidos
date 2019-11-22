/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sintegrar54', {
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
    Modelo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CFOP: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CST: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NumeroItem: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Quantidade: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    ValorProduto: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    ValorDesconto: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    BaseCalculoICMS: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    BaseCalculoICMSSubstituicao: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    ValorIPI: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    AliquotaICMS: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    tableName: 'sintegrar54'
  });
};
