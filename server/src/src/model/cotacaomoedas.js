/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaomoedas', {
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
    CotacaoAnt: {
      type: "DOUBLE",
      allowNull: true
    },
    CotacaoAtual: {
      type: "DOUBLE",
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Moeda: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ValorMoeda: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'cotacaomoedas'
  });
};
