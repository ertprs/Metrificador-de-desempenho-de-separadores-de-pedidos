/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prazopedidosovis', {
    IDPRAZOPEDIDO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IDPEDIDO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DATAPARCELA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    VALORPARCELA: {
      type: "DOUBLE",
      allowNull: true
    },
    IDMODALIDADE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'prazopedidosovis'
  });
};
