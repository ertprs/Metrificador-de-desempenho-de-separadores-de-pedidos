/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelaestados', {
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    Icms_Compra: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Icms_Venda_J: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Icms_Venda_F: {
      type: "DOUBLE",
      allowNull: false
    },
    Cod_IBGE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'tabelaestados'
  });
};
