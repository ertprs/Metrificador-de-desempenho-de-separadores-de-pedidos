/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('manifesto_det', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDManifesto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqNF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'manifesto_det'
  });
};
