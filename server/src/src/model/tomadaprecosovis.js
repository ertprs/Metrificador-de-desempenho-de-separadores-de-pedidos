/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tomadaprecosovis', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdTomadaPreco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IdProduto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IdCliente: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IdUsuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PrecoGondola: {
      type: "DOUBLE",
      allowNull: true
    },
    Marca: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Fabricante: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Peso: {
      type: "DOUBLE",
      allowNull: true
    },
    PrecoGondolaConc: {
      type: "DOUBLE",
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataHoraInc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UUID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'tomadaprecosovis'
  });
};
