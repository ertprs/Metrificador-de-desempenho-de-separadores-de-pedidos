/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cargas_acerto', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCarga: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Identificador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descontos: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPago: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPendente: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Devolucoes: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'cargas_acerto'
  });
};
