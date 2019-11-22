/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gruposclientes_secao', {
    Id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoGrupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoSecao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'gruposclientes_secao'
  });
};
