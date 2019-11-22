/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entregas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataLancamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataEntrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Fat: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Idgrupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelada: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    MotivoDevolucao: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'entregas'
  });
};
