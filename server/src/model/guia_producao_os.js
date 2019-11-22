/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guia_producao_os', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idOS: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    idGuia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DiaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraInicio: {
      type: DataTypes.TIME,
      allowNull: true
    },
    DiaFim: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraFim: {
      type: DataTypes.TIME,
      allowNull: true
    },
    nOperador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Ordem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'guia_producao_os'
  });
};
