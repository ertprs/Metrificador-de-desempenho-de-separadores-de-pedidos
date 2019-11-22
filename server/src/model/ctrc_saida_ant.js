/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrc_saida_ant', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDSaida: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Codigo_Ant: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    IE: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TPDoc: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SubSerie: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    nDoc: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DataEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Chave: {
      type: DataTypes.STRING(44),
      allowNull: true
    }
  }, {
    tableName: 'ctrc_saida_ant'
  });
};
