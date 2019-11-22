/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cargas_sobras', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCarregamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'cargas_sobras'
  });
};
