/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('selfcolor_colorantes', {
    COD_COLORANTE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    SIGLA_COLORANTE: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    DES_COLORANTE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SITUACAO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    PRECO: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00000'
    },
    COD_EAN: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    ORDENACAO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DAT_USER_ATU: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'selfcolor_colorantes'
  });
};
