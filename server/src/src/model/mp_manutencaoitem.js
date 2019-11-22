/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mp_manutencaoitem', {
    mit_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    mit_man_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    mit_ite_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    mit_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mit_defeito: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    mit_ite_numero_item: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mit_ite_descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mit_garantia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mit_retornado: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    mit_ite_fun_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'mp_manutencaoitem'
  });
};
