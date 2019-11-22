/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('danfe_entrada_faturas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDEntrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    nDocumento: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Valor: {
      type: "DOUBLE(11,2)",
      allowNull: false
    }
  }, {
    tableName: 'danfe_entrada_faturas'
  });
};
