/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comissaoav_prod', {
    Seq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqComissao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SeqProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'comissaoav_prod'
  });
};
