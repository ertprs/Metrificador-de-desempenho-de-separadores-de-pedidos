/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anotacao', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idUsuario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DataAdd: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Texto: {
      type: DataTypes.STRING(900),
      allowNull: false
    },
    Cor: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'anotacao'
  });
};
