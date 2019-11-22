/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cargas_principal_acerto', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Indice: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Dinheiro: {
      type: "DOUBLE",
      allowNull: true
    },
    DIferenca: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoCarregamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descontos: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'cargas_principal_acerto'
  });
};
