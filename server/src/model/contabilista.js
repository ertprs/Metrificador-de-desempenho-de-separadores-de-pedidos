/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contabilista', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CNPJ: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Contato: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NomeContador: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    CPFContador: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    CRC: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Complemento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CodigoCidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Site: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Fone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    AutorizaDownloadXML: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    DiaXmlEnvio: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '5'
    },
    EmailXmlEnvio: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'contabilista'
  });
};
