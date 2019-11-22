/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('centrocusto_lancamento', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoOP: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    TipoOP: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    Historico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    SeqItem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'centrocusto_lancamento'
  });
};
