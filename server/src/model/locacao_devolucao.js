/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locacao_devolucao', {
    lde_loc_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lde_loc_codigolocacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    lde_loc_diasatraso: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    lde_loc_valorcontrato: {
      type: "DOUBLE",
      allowNull: true
    },
    lde_loc_desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    lde_loc_valordanos: {
      type: "DOUBLE",
      allowNull: true
    },
    lde_loc_totalfaturar: {
      type: "DOUBLE",
      allowNull: true
    },
    lde_loc_valorentrada: {
      type: "DOUBLE",
      allowNull: true
    },
    lde_loc_qtdeparcelamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    lde_loc_juros: {
      type: "DOUBLE",
      allowNull: true
    },
    lde_loc_valortotal: {
      type: "DOUBLE",
      allowNull: true
    },
    lde_loc_cancelado: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    lde_loc_valoratraso: {
      type: "DOUBLE",
      allowNull: true
    },
    lde_loc_valorfaturar: {
      type: "DOUBLE",
      allowNull: true
    },
    lde_loc_status: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    lde_loc_codigoos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    lde_loc_data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    tableName: 'locacao_devolucao'
  });
};
