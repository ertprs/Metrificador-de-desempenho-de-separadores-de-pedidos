/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mp_colaboradoritem', {
    cit_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cit_fun_codigo: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    cit_ite_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cit_data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cit_usuario: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cit_est_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cit_dep_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cit_data_fim: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'mp_colaboradoritem'
  });
};
