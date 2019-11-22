/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trocashistorico', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SequenciaTroca: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Historico: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    tableName: 'trocashistorico'
  });
};
