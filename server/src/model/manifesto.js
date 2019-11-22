/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('manifesto', {
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
    Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Motorista: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CNH: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    RG: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    VEICULO: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'manifesto'
  });
};
