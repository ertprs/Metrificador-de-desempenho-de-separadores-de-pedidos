/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('referralmarketing_pontuacao', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ID_ClienteIndicador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Pontos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SaldoAnterior: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SaldoAtual: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CodigoMovimento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'referralmarketing_pontuacao'
  });
};
