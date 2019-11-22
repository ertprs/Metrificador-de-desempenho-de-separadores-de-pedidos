/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_mp_manutencao', {
    man_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    man_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    man_previsao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    man_usuario: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    man_prestador: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    man_status: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'v_mp_manutencao'
  });
};
