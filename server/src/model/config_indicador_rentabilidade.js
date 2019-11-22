/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_indicador_rentabilidade', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Ind_Rent_Cor: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Ind_Rent_Percentual: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'config_indicador_rentabilidade'
  });
};
