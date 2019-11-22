/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_internacao', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataEntrada: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataSaida: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Obito: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    NumeroBaia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Sintomas: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Diagnostico: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CodigoConsulta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ValorOrcamento: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPromissoria: {
      type: "DOUBLE",
      allowNull: true
    },
    VencimentoPromissoria: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ValorDiaria: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'petshop_internacao'
  });
};
