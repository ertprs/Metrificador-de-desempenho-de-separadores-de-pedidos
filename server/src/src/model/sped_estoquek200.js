/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_estoquek200', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    UN: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    QtdeEstAnt: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    QtdeEntrada: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    QtdeSaida: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    QtdeAcerto: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    QtdeApontamento: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    QtdeCorrecao: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    QtdeSaldoFinal: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ApenasMovEst: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    TimeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'sped_estoquek200'
  });
};
