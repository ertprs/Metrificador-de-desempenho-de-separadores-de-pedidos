/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtoslinha', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Ativo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    EntregaPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'produtoslinha'
  });
};
