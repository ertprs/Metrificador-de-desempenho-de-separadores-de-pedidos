/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ftp', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Ftp: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_ftp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    senha_ftp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Smtp: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NomeExibicao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Senha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PortaSmtp: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UsuarioEmail: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Email_AUTH_SSL: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Pasta_Cli_FTP: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    FTPModoAtivo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    SMTP_F: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NomeExibicao_F: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Email_F: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Senha_F: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PortaSmtp_F: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UsuarioEmail_F: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Email_AUTH_SSL_F: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    SMTP_o: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NomeExibicao_O: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Email_O: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Senha_O: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PortaSmtp_O: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UsuarioEmail_O: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Email_AUTH_SSL_O: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    SMTP_Fat: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NomeExibicao_Fat: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Email_Fat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Senha_Fat: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PortaSmtp_Fat: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UsuarioEmail_Fat: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Email_AUTH_SSL_Fat: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'ftp'
  });
};
