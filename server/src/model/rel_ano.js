/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_ano', {
    MesAno: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    NFuncionario: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    DiasMes: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    HNormal: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    HExtra: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    FaltasTotais: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    FaltasAtestado: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    FaltasDias: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Faltasperc: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    HExtraPerc: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'rel_ano'
  });
};
