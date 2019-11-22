/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opt_patologica', {
    código: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'opt_patologica'
  });
};
