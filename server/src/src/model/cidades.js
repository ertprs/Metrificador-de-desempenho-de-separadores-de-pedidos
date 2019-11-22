/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cidades', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Cidade: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    CEP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Ordem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Rota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Versao: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    PrioridadeEntrega: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TabelaPreco: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IDTabelaPreco: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'cidades'
  });
};
