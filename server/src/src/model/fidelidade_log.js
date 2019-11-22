/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fidelidade_log', {
    FLO_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FLO_PDV: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FLO_VENDA: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FLO_STATUS: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FLO_CLIENTE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FLO_CPF: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FLO_DATAINC: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    FLO_EMPRESA: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    FLO_SALDO_PONTOS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    FLO_PONTUACAO_VENDA: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'fidelidade_log'
  });
};
