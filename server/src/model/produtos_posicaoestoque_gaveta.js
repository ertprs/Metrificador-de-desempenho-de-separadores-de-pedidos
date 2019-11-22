/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_posicaoestoque_gaveta', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'produtos_posicaoestoque_gaveta'
  });
};
