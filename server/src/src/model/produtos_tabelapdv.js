/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_tabelapdv', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    UM: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CodigoBarras: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    VendaPDV: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoTabela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'produtos_tabelapdv'
  });
};
