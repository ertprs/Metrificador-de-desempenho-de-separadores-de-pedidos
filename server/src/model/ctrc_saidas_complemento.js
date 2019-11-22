/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrc_saidas_complemento', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDSaida: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Tipo_Redespacho: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Cod_Consignatario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cod_Redespachante: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    UF_Placa: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Ibge_Origem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Ibge_Destino: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Total_Pedagio: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_Sec: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_Despacho: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_Outros: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_Frete: {
      type: "DOUBLE",
      allowNull: false
    },
    Total_Liquido: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'ctrc_saidas_complemento'
  });
};
