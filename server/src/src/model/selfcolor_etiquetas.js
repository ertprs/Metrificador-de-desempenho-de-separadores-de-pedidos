/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('selfcolor_etiquetas', {
    COD_COR_ETIQUETA: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    NOM_COR_ETIQUETA: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SITUACAO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'A'
    }
  }, {
    tableName: 'selfcolor_etiquetas'
  });
};
