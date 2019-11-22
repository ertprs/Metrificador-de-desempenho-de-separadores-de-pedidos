/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes_modalidade', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoModalidade: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescricaoModalidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    RazaoCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'clientes_modalidade'
  });
};
