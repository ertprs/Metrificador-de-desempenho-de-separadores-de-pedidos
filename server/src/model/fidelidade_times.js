/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fidelidade_times', {
    FTI_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FTI_NOME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FTI_LOGO: {
      type: "LONGBLOB",
      allowNull: true
    },
    FTI_DATAINC: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    FTI_SIGLA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FTI_CANCELADO: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'fidelidade_times'
  });
};
