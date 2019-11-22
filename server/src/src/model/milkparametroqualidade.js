/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkparametroqualidade', {
    Id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    },
    ValRef: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Percentual: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Intervalo1: {
      type: "DOUBLE",
      allowNull: true
    },
    Intervalo2: {
      type: "DOUBLE",
      allowNull: true
    },
    Abaixo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ' '
    },
    Dentro: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ' '
    },
    Acima: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ' '
    },
    ValorReais: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'milkparametroqualidade'
  });
};
