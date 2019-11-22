/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integracoes_mensagens_enviar_anexos', {
    imea_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    imea_ime_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    imea_arquivo: {
      type: "MEDIUMBLOB",
      allowNull: false
    },
    imea_nome_arquivo: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'integracoes_mensagens_enviar_anexos'
  });
};
