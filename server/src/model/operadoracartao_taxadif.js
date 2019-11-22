/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operadoracartao_taxadif', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoOperadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Parcela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TaxaOp: {
      type: "DOUBLE",
      allowNull: true
    },
    TipoTaxaOp: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Taxa: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'operadoracartao_taxadif'
  });
};
