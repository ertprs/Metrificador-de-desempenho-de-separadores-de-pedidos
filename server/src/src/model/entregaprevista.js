/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entregaprevista', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqProdMovimento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TipoEntrega: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    EmpresaRetirada: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    DataPrevisao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TipoMovimento: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CodigoMovimento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqProdutoVendaGerada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'entregaprevista'
  });
};
