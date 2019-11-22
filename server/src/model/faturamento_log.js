/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faturamento_log', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idPedido: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    idVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    idNota: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'faturamento_log'
  });
};
