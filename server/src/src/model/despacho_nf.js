/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('despacho_nf', {
    Seq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqDes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IdNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'despacho_nf'
  });
};
