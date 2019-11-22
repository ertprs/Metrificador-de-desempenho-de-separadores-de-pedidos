/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mp_subgrupo', {
    sgr_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sgr_gru_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    sgr_descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'mp_subgrupo'
  });
};
