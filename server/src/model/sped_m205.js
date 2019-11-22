/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_m205', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MESANO: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    Campo_Num: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Cod_Receita: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'sped_m205'
  });
};
