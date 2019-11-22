/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dicas', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Titulo: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Texto: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    Lida: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'dicas'
  });
};
