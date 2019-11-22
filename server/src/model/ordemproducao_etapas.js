/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordemproducao_etapas', {
    codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'ordemproducao_etapas'
  });
};
