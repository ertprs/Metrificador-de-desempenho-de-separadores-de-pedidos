/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixaaberturasformas_moeda', {
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
    SeqCAF: {
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
    ValorBaseFinal: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorMoedaFinal: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'caixaaberturasformas_moeda'
  });
};
