/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integracoes_pedidos_produtos', {
    ipp_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    ipp_pedido_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    ipp_integracao: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    ipp_quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    ipp_preco_bruto: {
      type: "DOUBLE",
      allowNull: true
    },
    ipp_preco_liquido: {
      type: "DOUBLE",
      allowNull: true
    },
    ipp_descontos: {
      type: "DOUBLE",
      allowNull: true
    },
    ipp_subtotal: {
      type: "DOUBLE",
      allowNull: true
    },
    ipp_tabela_preco_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ipp_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ipp_descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    ipp_sku: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'integracoes_pedidos_produtos'
  });
};
