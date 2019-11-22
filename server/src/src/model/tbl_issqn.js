/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_issqn', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0'
    },
    Descricao: {
      type: DataTypes.STRING(1200),
      allowNull: true
    },
    Versao: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    tableName: 'tbl_issqn'
  });
};
