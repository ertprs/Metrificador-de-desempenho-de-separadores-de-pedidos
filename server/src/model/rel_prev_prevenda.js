/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_prev_prevenda', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Dias: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    ModalidadeCb: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'rel_prev_prevenda'
  });
};
