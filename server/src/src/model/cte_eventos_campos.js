/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cte_eventos_campos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idEvento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Grupo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Campo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nItem: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Valor: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    tableName: 'cte_eventos_campos'
  });
};
