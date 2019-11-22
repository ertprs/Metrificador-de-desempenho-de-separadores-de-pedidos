/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrc_autorizadosxml', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdCte: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CNPJ: {
      type: DataTypes.STRING(14),
      allowNull: false
    }
  }, {
    tableName: 'ctrc_autorizadosxml'
  });
};
