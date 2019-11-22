/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gera_venda', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nvenda: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    IdProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Qtde: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    SeqProdVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Processado: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    Linha: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Coluna: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    NumProd: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'gera_venda'
  });
};
