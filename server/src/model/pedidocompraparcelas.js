/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidocompraparcelas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Npedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'pedidocompraparcelas'
  });
};
