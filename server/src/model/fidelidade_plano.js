/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fidelidade_plano', {
    fpl_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fpl_data_cadastro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fpl_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fpl_empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    fpl_terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fpl_descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fpl_tipo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    fpl_data_inicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fpl_data_final: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fpl_cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    fpl_cancelado_data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fpl_cancelado_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fpl_cancelado_temrinal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fpl_cancelado_terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fpl_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'fidelidade_plano'
  });
};
