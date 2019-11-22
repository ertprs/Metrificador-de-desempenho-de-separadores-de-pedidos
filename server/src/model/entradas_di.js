/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entradas_di', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoEntrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NumDI: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    DataRegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    CodigoExportador: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Local: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    DataDesembaraco: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Identificador: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TpViaTransp: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true
    },
    ValorAFRMM: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    TipoImportacao: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true
    },
    UF_Adquirente: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CNPJ_Adquirente: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'entradas_di'
  });
};
