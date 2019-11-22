/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fidelidade_plano_itens', {
    fpi_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fpi_fpl_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    fpi_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fpi_terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fpi_sec_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    fpi_gru_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    fpi_sgr_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    fpi_desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    fpi_limite: {
      type: "DOUBLE",
      allowNull: true
    },
    fpi_pontos: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'fidelidade_plano_itens'
  });
};
