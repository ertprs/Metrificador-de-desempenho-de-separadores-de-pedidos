/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promocao_exclusividade', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqPromocao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Lista: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'promocao_exclusividade'
  });
};
