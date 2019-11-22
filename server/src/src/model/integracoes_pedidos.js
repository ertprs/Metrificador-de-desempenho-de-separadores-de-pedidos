/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integracoes_pedidos', {
    ip_seq: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ip_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    ip_integracao: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    ip_cliente_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    ip_valor_sub_total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ip_valor_frete: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ip_forma_entrega: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ip_forma_pagamento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ip_tipo_pagamento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ip_parcelas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ip_transacaoid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ip_ent_endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ip_ent_numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ip_ent_bairro: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ip_ent_complemento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    ip_ent_cep: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ip_ent_uf: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ip_ent_cidade: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ip_ent_telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ip_ent_celular: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ip_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ip_tabela_preco_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ip_observacoes: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ip_data_criacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ip_data_alteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ip_importado: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    ip_cancelamento_processado: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    ip_prevenda_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ip_numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ip_status_importado: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ip_transportadora_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ip_data_faturamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ip_forma_parcelamento_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    ip_terminal_importando: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ip_marketplace: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ip_codigo_pedido_externo: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'integracoes_pedidos'
  });
};
