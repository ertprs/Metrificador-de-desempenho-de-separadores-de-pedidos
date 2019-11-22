/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integracoes_mensagens_enviar', {
    ime_sequencia: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ime_pedido_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    ime_integracao: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    ime_mensagem: {
      type: DataTypes.STRING(3500),
      allowNull: false
    },
    ime_enviada: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'integracoes_mensagens_enviar'
  });
};
