/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contascontabeis', {
    Codigo: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    CodigoSuperior: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Movimenta: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    tableName: 'contascontabeis'
  });
};
