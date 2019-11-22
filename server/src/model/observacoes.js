/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('observacoes', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Texto1: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    Texto2: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    Texto3: {
      type: DataTypes.STRING(80),
      allowNull: false
    }
  }, {
    tableName: 'observacoes'
  });
};
