/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrc_saida_emitente', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CNPJ: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    IE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    NOME: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    FANTASIA: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TELEFONE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ENDERECO: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    NUMERO: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    BAIRRO: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    CEP: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    IDCIDADE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    CODIGO_RNTRC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UTCTime: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'ctrc_saida_emitente'
  });
};
