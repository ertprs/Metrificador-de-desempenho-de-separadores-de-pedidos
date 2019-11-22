/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empresas_nfe', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    NomeFantasia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    IE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    InscricaoMunicipal: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Telefone1: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Telefone2: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Telefax: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    WebSite: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Complemento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoCidadeIbge: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CRT: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    DestacaIPI: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    TipoLucro: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    UTCTime: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataAlterado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Codigo_RNTRC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Tipo_RNTRC: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    RespTec_CNPJ: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    RespTec_Contato: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RespTec_Email: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    RespTec_Fone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    RespTec_idCSRT: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    RespTec_CSRT: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    tableName: 'empresas_nfe'
  });
};
