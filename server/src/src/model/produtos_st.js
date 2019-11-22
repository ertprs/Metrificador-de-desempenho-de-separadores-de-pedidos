/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_st', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    uf: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    MVA: {
      type: "DOUBLE",
      allowNull: false
    },
    MVA_AJUST: {
      type: "DOUBLE",
      allowNull: false
    },
    ICMS: {
      type: "DOUBLE",
      allowNull: false
    },
    MVA_SIMPLES: {
      type: "DOUBLE",
      allowNull: false
    },
    CST: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ICMS_Intra: {
      type: "DOUBLE",
      allowNull: true
    },
    CST_Simples: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ValorPauta: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ICMS_Inter_PF: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseST: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '100.00'
    },
    PautaImportada: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'produtos_st'
  });
};
