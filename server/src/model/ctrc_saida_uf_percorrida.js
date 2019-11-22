/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrc_saida_uf_percorrida', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_Saida: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    tableName: 'ctrc_saida_uf_percorrida'
  });
};
