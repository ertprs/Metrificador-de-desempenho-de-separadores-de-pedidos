/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtosalternativa', {
    código_master: {
      type: "DOUBLE",
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    _sku_mycommerce_: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'produtosalternativa'
  });
};
