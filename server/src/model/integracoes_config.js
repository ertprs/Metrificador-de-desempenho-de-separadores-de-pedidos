/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integracoes_config', {
    ico_sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ico_integracao_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ico_empresa_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ico_vendedor_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ico_grupo_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ico_forma_parcelamento_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ico_modalidade_cobranca_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ico_gerar_venda: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ico_importar_automaticamente: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ico_utilizar_consumidor: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    ico_notificar_clientes_alteracao_status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'integracoes_config'
  });
};
