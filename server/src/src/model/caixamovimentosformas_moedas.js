/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixamovimentosformas_moedas', {
    sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Moeda: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SeqCMF: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ValorBase: {
      type: "DOUBLE",
      allowNull: true
    },
    Cotacao: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorMoeda: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorBaseTroco: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTroco: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'caixamovimentosformas_moedas'
  });
};
