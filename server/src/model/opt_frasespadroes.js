/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opt_frasespadroes', {
    codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'opt_frasespadroes'
  });
};
