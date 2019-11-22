/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cenariofluxo_subcontas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDCenario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IdSubContas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeSubConta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Indice: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: 'D'
    }
  }, {
    tableName: 'cenariofluxo_subcontas'
  });
};
