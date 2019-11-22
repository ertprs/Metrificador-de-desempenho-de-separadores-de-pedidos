/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integracoes_pedidos_produtos_grade', {
    ippg_produto_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    ippg_pedido_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    ippg_integracao: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    ippg_grade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ippg_linha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ippg_coluna: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ippg_quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    ippg_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'integracoes_pedidos_produtos_grade'
  });
};
