/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meuspedidos_usuarios', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    administrador: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    excluido: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ultima_alteracao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'meuspedidos_usuarios'
  });
};
