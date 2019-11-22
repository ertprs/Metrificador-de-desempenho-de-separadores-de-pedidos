/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('animal_raca', {
    ARA_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ARA_EMP_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ARA_DESCRICAO: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    ARA_TIPO_ANIMAL: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ARA_USU_CODIGO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ARA_DATAINC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ARA_TERMINAL: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'animal_raca'
  });
};
