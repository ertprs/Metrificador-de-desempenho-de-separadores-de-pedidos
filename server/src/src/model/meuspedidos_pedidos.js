/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meuspedidos_pedidos', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cliente_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    criador_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nome_contato: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    numero: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    total: {
      type: "DOUBLE",
      allowNull: true
    },
    condicao_pagamento_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    forma_pagamento_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    condicao_pagamento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    data_emissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacoes: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ultima_alteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    importado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    transportadora_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'meuspedidos_pedidos'
  });
};
