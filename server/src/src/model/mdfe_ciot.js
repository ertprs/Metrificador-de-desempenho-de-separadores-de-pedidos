/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdfe_ciot', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_MDFe: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    NumeroCIOT: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    tpDocumento: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    Documento: {
      type: DataTypes.STRING(14),
      allowNull: false
    }
  }, {
    tableName: 'mdfe_ciot'
  });
};
