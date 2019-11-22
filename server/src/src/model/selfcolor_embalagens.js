/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('selfcolor_embalagens', {
    COD_EMBALAGEM: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    DES_EMBALAGEM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    VOLUME: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    COD_COR_ETIQUETA: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    SITUACAO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'A'
    },
    DAT_USER_ATU: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'selfcolor_embalagens'
  });
};
