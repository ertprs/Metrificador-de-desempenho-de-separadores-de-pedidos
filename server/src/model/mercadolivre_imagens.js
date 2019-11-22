/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadolivre_imagens', {
    MLI_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MLI_ID_ANUNCIO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MLI_IMAGEM: {
      type: "LONGBLOB",
      allowNull: true
    },
    MLI_PRINCIPAL: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    MLI_URL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MLI_CODIGO_IMAGEM: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'mercadolivre_imagens'
  });
};
