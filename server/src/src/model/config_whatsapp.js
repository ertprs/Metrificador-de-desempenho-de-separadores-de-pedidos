/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_whatsapp', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Msg_Aniversario: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Msg_Cobranca: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'config_whatsapp'
  });
};
