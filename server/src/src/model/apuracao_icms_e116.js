/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apuracao_icms_e116', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DataFim: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    E116_CODOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    E116_VLROR: {
      type: "DOUBLE",
      allowNull: true
    },
    E116_VENC: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    E116_CODREC: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    E116_NUMPROC: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    E116_INDPROC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    E116_PROC: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    E116_TXTCOMPL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    E116_MESANO: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    DataLancamento: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'apuracao_icms_e116'
  });
};
