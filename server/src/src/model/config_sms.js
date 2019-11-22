/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_sms', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Servidor: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    IDUsuario: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Senha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Apelido: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Msg_Aniversario: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    Msg_Cobranca: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    Msg_OS: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    Msg_Promocao: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'config_sms'
  });
};
