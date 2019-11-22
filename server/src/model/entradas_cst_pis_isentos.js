/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entradas_cst_pis_isentos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CST: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    NCM: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    Versao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'entradas_cst_pis_isentos'
  });
};
