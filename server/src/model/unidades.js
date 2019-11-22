/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unidades', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UND: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Padrao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    FCI_Unidade: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    tableName: 'unidades'
  });
};
