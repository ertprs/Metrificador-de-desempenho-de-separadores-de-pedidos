/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendasprodutoslog', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqVP: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Operacao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(35),
      allowNull: true
    }
  }, {
    tableName: 'vendasprodutoslog'
  });
};
