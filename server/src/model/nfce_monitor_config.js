/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfce_monitor_config', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MonitorAtivo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Intervalo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ContManual: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    dhAtivoCont: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UserAtivoCont: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    TerminalAtivoCont: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    TipoIntervalo: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    IntervaloHorario: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: '00:00'
    }
  }, {
    tableName: 'nfce_monitor_config'
  });
};
