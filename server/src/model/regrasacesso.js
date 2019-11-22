/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regrasacesso', {
    RegraID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RegraNome: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    RegraAcesso: {
      type: DataTypes.STRING(130),
      allowNull: false
    },
    RegraGrupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'regrasacesso'
  });
};
