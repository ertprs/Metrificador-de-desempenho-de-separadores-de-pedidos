/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fidelidade_movimento', {
    fmo_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fmo_data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fmo_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fmo_terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fmo_ven_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fmo_emp_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fmo_fca_sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fmo_fpl_sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fmo_cli_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fmo_sec_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fmo_gru_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fmo_sgr_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fmo_pro_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fmo_quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    fmo_valor_tabela: {
      type: "DOUBLE",
      allowNull: true
    },
    fmo_valor_unitario: {
      type: "DOUBLE",
      allowNull: true
    },
    fmo_valor_desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    fmo_perc_desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    fmo_valor_total: {
      type: "DOUBLE",
      allowNull: true
    },
    fmo_pontos: {
      type: "DOUBLE",
      allowNull: true
    },
    fmo_codigovenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    fmo_vpr_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MovPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'fidelidade_movimento'
  });
};
