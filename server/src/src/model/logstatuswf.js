/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logstatuswf', {
    IdLogStatusWF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Usuario: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    IdStatusWF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DescricaoStatusWF: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    idPedido: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoMov: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'logstatuswf'
  });
};
