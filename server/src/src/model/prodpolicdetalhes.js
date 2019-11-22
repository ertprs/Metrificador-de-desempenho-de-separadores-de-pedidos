/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prodpolicdetalhes', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CFOP: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    UnidadeMedida: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NotaFiscal: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Fornecedor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Dia: {
      type: "DOUBLE",
      allowNull: true
    },
    Transportadora: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'prodpolicdetalhes'
  });
};
