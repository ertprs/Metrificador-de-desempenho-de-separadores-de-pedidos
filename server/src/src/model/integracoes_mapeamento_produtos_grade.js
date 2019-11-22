/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integracoes_mapeamento_produtos_grade', {
    impg_seq: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    impg_codigo_produto: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    impg_grade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    impg_linha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    impg_coluna: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'integracoes_mapeamento_produtos_grade'
  });
};
