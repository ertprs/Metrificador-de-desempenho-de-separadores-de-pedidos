/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mp_tipo_item', {
    tit_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tit_descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    tit_status: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'mp_tipo_item'
  });
};
