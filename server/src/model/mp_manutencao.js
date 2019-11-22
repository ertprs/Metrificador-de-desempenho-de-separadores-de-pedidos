/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mp_manutencao', {
    man_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
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
    man_status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    man_fin_descricao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    man_fin_vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    man_fin_valor: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'mp_manutencao'
  });
};
