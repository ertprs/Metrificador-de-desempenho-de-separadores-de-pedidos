/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conferencia_cega_nota_entrada_lote', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqNota: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SeqConfCegaEntrada: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IDProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IDLote: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'conferencia_cega_nota_entrada_lote'
  });
};
