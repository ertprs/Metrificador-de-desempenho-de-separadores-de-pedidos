/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_nserie', {
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
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataInclusao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraInclusao: {
      type: DataTypes.TIME,
      allowNull: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCompra: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TipoCompra: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DataVenda: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraVenda: {
      type: DataTypes.TIME,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Codigovenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TipoVenda: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NotaCompra: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Nserie: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'produtos_nserie'
  });
};
