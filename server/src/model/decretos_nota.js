/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('decretos_nota', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Msg: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    Exibe_ConsFinal: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Exibe_ForaEstado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Exibe_Revenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Exibe_DentroEstado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    Exibe_SimplesNacional: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    TipoNF: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'decretos_nota'
  });
};
