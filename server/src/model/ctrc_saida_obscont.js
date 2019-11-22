/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrc_saida_obscont', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDSaida: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    xCampo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    xTexto: {
      type: DataTypes.STRING(160),
      allowNull: false
    }
  }, {
    tableName: 'ctrc_saida_obscont'
  });
};
