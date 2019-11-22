/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaocompras_precos', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDCotacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PrecoCompra: {
      type: "DOUBLE",
      allowNull: true
    },
    PrecoFornecedor: {
      type: "DOUBLE",
      allowNull: true
    },
    QuantidadeFornecedor: {
      type: "DOUBLE",
      allowNull: true
    },
    PIcmsFornecedor: {
      type: "DOUBLE",
      allowNull: true
    },
    FabricanteFornecedor: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'cotacaocompras_precos'
  });
};
