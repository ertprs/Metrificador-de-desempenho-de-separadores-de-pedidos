/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_seqordementrega', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'tmp_seqordementrega'
  });
};
