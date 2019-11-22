/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_email', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Email_Destinatario: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Assunto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SequenciaNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDCCe: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Contabilidade_Xml_Mes: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Contabilidade_Xml_NFe: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Contabilidade_Xml_NFce: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Contabilidade_Xml_Cte: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Contabilidade_Xml_Status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Email_Emitente: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    NomeAnexo: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    NomeAnexo1: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    NomeAnexo2: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Setor: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Contabilidade_Xml_NFSe: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'log_email'
  });
};
