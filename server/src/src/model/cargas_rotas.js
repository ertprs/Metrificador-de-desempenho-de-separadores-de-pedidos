/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cargas_rotas', {
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
    CodigoRota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Rota: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Volume: {
      type: "DOUBLE",
      allowNull: true
    },
    Peso: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    SeqCarga: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Distancia: {
      type: "DOUBLE",
      allowNull: true
    },
    NEntregas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PesoNPaletizado: {
      type: "DOUBLE",
      allowNull: true
    },
    CustoRota: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'cargas_rotas'
  });
};
