/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('py_distritos', {
    coddistrito: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    distrito: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    coddepartamento: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    cep: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ordem: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Rota: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    idTabelaPreco: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PrioridadeEntrega: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TabelaPreco: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Versao: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    tableName: 'py_distritos'
  });
};
