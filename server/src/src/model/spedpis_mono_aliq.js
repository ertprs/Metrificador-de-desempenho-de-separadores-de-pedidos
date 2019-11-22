/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spedpis_mono_aliq', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    NCM: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    NCM_EX: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    CST: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'spedpis_mono_aliq'
  });
};
