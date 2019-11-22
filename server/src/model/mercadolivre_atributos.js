/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadolivre_atributos', {
    MAT_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MAT_ID_ANUNCIO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    MAT_ID_API: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MAT_VALOR_API: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MAT_APLICAVEL_API: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    MAT_UNIDADE_API: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MAT_ID_VALOR_API: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'mercadolivre_atributos'
  });
};
