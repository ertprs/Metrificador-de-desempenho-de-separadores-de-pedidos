/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_dadosretidos', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ICMSST_UltimaCompra: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseST_Retido: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pICMSEfet: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    FcpST_Retido: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    pFcpST_Retido: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    ICMS_UltimaCompra: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    pBCEfet: {
      type: "DOUBLE(11,3)",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'produtos_dadosretidos'
  });
};
