/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mensagem_padrao_sms', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    TextoSMS: {
      type: DataTypes.STRING(120),
      allowNull: false
    }
  }, {
    tableName: 'mensagem_padrao_sms'
  });
};
