/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelaicms_beneficios', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    NCM: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    cBeneficio: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    CST: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    valor: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Aliquota: {
      type: "DOUBLE(11,2)",
      allowNull: true
    }
  }, {
    tableName: 'tabelaicms_beneficios'
  });
};
