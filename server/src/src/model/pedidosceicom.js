/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidosceicom', {
    pce_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    pce_data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pce_valor_sub_total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pce_forma_entrega: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pce_valor_frete: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pce_tipo_pagamento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pce_forma_pagamento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pce_parcelas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    pce_transacaoid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    pce_ent_endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pce_ent_numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pce_ent_bairro: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PCE_ENT_COMPLEMENTO: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    pce_ent_cep: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    pce_ent_cidade: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pce_ent_estado: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pce_ent_pais: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    pce_ent_telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    pce_ent_celular: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    pce_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    pce_importado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    pce_observacoes: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'pedidosceicom'
  });
};
