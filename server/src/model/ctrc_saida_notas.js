/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrc_saida_notas', {
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
    nRoma: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nPed: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    nDoc: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dEmi: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vBC: {
      type: "DOUBLE",
      allowNull: true
    },
    vICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    vBCST: {
      type: "DOUBLE",
      allowNull: true
    },
    vST: {
      type: "DOUBLE",
      allowNull: true
    },
    vProd: {
      type: "DOUBLE",
      allowNull: true
    },
    vNF: {
      type: "DOUBLE",
      allowNull: true
    },
    nCFOP: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    nPeso: {
      type: "DOUBLE",
      allowNull: true
    },
    PIN: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    NFeChave: {
      type: DataTypes.STRING(44),
      allowNull: true
    },
    NFePIN: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    OutrosTpDoc: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    OutrosDescOutros: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    OutrosnDoc: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OutrosvDocFisc: {
      type: "DOUBLE",
      allowNull: true
    },
    TipoDoc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(18),
      allowNull: true
    }
  }, {
    tableName: 'ctrc_saida_notas'
  });
};
