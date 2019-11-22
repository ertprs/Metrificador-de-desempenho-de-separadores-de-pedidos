/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fidelidade_cartao', {
    fca_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fca_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    fca_data_cadastro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fca_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fca_empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    fca_terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fca_tarja_magnetica: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fca_data_vencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fca_cli_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    fca_cli_razao_social: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fca_fpl_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    fca_cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    fca_cancelado_motivo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fca_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'fidelidade_cartao'
  });
};
