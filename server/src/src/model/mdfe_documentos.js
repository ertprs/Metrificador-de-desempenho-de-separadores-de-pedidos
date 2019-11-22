/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdfe_documentos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_MDFe: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ID_Cidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    NumeroDoc: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SubSerie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Data_Emissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Cnpj_Emitente: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    UF_Destino: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Pin_Suframa: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Chave: {
      type: DataTypes.STRING(44),
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    PesoBruto: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorCarga: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    ChaveContigencia: {
      type: DataTypes.STRING(44),
      allowNull: true
    }
  }, {
    tableName: 'mdfe_documentos'
  });
};
