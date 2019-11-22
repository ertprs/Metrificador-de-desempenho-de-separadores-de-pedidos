/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doacoesprodutoslotes', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdDoacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SeqProdDoacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Quantidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'doacoesprodutoslotes'
  });
};
