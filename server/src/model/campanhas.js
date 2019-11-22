/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campanhas', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataCad: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Validade: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    QtdeMax: {
      type: "DOUBLE",
      allowNull: true
    },
    EnviaPalm: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodTab: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeTabela: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorPromocional: {
      type: "DOUBLE",
      allowNull: true
    },
    VendAfetados: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CondiPag: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeCondicaoPag: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TipoCampanha: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'campanhas'
  });
};
