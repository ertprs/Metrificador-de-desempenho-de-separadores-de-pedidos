/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integracoes_config_workflow', {
    icw_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    icw_integracao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    icw_id_wf: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    icw_empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    icw_descricao: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    icw_enviar: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'integracoes_config_workflow'
  });
};
