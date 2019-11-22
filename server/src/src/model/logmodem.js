/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logmodem', {
    Sequencia: {
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
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Atendido: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'logmodem'
  });
};
