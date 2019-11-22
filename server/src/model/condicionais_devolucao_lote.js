/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('condicionais_devolucao_lote', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqProdCondicional: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    Baixado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'condicionais_devolucao_lote'
  });
};
