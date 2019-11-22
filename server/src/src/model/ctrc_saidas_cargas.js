/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrc_saidas_cargas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDSaida: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CNPJ_Remetente: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IE_Remetente: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Cidade_Origem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeCidade_Remetente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UF_Remetente: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CNPJ_Destinatario: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IE_Destinatario: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Cidade_Destinatario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeCidade_Destinatario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UF_Destinatario: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Codigo_Remetente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Codigo_Destinatario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Codigo_Expedidor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Codigo_Recebedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Codigo_Outros: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    indIEDest: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IndIERem: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    IndIEExp: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    IndIERec: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    IndIEOutro: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    }
  }, {
    tableName: 'ctrc_saidas_cargas'
  });
};
