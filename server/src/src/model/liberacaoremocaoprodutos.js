/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liberacaoremocaoprodutos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CodigoPrevenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Motivo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    },
    Terminal: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    },
    DataHoraLiberacao: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    },
    Liberado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'liberacaoremocaoprodutos'
  });
};
