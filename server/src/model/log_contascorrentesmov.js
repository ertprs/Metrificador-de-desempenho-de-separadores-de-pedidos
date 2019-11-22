/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_contascorrentesmov', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SeqCCM: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CCOrigem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CCDestino: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'log_contascorrentesmov'
  });
};
