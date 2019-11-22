/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_cortes', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeCorte: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoPrevenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCarga: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoCondicaoPagamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataCortePda: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Anulacao_Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Anulacao_Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MarcadoOp: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    BaixadoProd: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'produtos_cortes'
  });
};
