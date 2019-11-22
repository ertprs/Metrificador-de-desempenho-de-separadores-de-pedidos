/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meuspedidos_mapeamento', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    meuspedidosid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    mycommerceid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    entidade: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    alterado_apos: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dataalteracao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'meuspedidos_mapeamento'
  });
};
