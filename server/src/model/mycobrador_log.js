/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mycobrador_log', {
    mlo_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mlo_cr_seq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    mlo_data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mlo_hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    mlo_destinatario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mlo_terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'mycobrador_log'
  });
};
