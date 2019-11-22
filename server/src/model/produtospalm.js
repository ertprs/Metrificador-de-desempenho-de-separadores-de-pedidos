/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtospalm', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoMarca: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeMarca: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Vend2dias: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Estoque: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'produtospalm'
  });
};
