/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preseparacao', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DataHoraInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataHoraFinalizado: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'preseparacao'
  });
};
