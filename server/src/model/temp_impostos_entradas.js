/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_impostos_entradas', {
    TotalContabil: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseICMS: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorIcms: {
      type: "DOUBLE",
      allowNull: true
    },
    BasePisCofins: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPIS: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCofins: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalContabilNFS: {
      type: "DOUBLE",
      allowNull: true
    },
    BaseNFs: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorISS: {
      type: "DOUBLE",
      allowNull: true
    },
    BasePisCofinsNFS: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPisNFS: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCofinsNFS: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'temp_impostos_entradas'
  });
};
