/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transportadoras_frete', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idTransportadora: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Estado: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    Cidade: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    Intervalo1: {
      type: "DOUBLE",
      allowNull: false
    },
    Intervalo2: {
      type: "DOUBLE",
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    ValorExcedente: {
      type: "DOUBLE",
      allowNull: true
    },
    PrazoMedio: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'transportadoras_frete'
  });
};
