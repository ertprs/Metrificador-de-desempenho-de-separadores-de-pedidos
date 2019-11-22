/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelapontuacaovenda_intervalo', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SequenciaPontuacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ValorInicial: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorFinal: {
      type: "DOUBLE",
      allowNull: true
    },
    Pontuacao: {
      type: "DOUBLE",
      allowNull: true
    },
    DescricaoIntervalo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    FormaRecebimento: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tabelapontuacaovenda_intervalo'
  });
};
