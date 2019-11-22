/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkass_rotas', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idAss: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    idRota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Valor: {
      type: "DOUBLE(11,4)",
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'milkass_rotas'
  });
};
