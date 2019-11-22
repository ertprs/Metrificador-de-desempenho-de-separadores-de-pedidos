/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('newsletter_listas', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nomeLista: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    emails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'newsletter_listas'
  });
};
