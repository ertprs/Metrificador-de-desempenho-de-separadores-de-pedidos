/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fornecedoresrestricoes_clientes', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDFornecedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IDCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'fornecedoresrestricoes_clientes'
  });
};
