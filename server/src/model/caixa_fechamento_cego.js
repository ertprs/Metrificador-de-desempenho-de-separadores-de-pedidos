/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixa_fechamento_cego', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdCaixaAbertura: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IdRecebimento: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ValorLancado: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'caixa_fechamento_cego'
  });
};
