/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_mp_colaboradoritem', {
    cit_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    cit_data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cit_usuario: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cit_fun_codigo: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cit_ite_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ite_descricao: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    cit_est_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    est_descricao: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    cit_dep_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dep_descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cit_data_fim: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'v_mp_colaboradoritem'
  });
};
