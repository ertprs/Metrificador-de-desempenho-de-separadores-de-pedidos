/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meuspedidos_campo_extra', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    excluido: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Campo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'meuspedidos_campo_extra'
  });
};
