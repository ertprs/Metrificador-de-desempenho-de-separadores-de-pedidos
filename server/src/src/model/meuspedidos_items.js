/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meuspedidos_items', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sequencia_pedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    produto_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tabela_preco_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    preco_bruto: {
      type: "DOUBLE",
      allowNull: true
    },
    preco_liquido: {
      type: "DOUBLE",
      allowNull: true
    },
    cotacao_moeda: {
      type: "DOUBLE",
      allowNull: true
    },
    descontos: {
      type: "DOUBLE",
      allowNull: true
    },
    observacoes: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    excluido: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ipi: {
      type: "DOUBLE",
      allowNull: true
    },
    tipo_ipi: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    st: {
      type: "DOUBLE",
      allowNull: true
    },
    subtotal: {
      type: "DOUBLE",
      allowNull: true
    },
    importado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'meuspedidos_items'
  });
};
