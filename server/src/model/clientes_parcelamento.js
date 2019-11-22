/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes_parcelamento', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DescricaoForma: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoForma: {
      type: DataTypes.STRING(3),
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
    tableName: 'clientes_parcelamento'
  });
};
