/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_49_res_semana2', {
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Flex_Mes_Anterior: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Flex_Periodo: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Flex_Saldo: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'temp_49_res_semana2'
  });
};
