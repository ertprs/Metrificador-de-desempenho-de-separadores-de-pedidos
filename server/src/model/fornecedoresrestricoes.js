/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fornecedoresrestricoes', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IDCidadeIBGE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(35),
      allowNull: true
    }
  }, {
    tableName: 'fornecedoresrestricoes'
  });
};
