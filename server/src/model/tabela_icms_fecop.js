/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabela_icms_fecop', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NCM: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    Aliquota: {
      type: "DOUBLE",
      allowNull: false
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    tableName: 'tabela_icms_fecop'
  });
};
