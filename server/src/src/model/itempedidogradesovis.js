/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itempedidogradesovis', {
    IDITEMPEDIDOGRADE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDITEMPEDIDO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDGRADEERP: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    IDGRADECOLUNAERP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IDGRADELINHAERP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    QTDE: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'itempedidogradesovis'
  });
};
