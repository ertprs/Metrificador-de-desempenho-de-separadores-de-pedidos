/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_entregues', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqVendaProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeEntregue: {
      type: "DOUBLE",
      allowNull: true
    },
    IDEntrega: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    QtdeDevolvida: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'produtos_entregues'
  });
};
