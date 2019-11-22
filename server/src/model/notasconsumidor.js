/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notasconsumidor', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SubSerie: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NumeroInicial: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NumeroFinal: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseCalculoICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    IsentaNTributado: {
      type: "DOUBLE",
      allowNull: true
    },
    Outras: {
      type: "DOUBLE",
      allowNull: true
    },
    Aliquota: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'notasconsumidor'
  });
};
