/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locacao_produtos', {
    lpr_loc_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lpr_loc_codigolocacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    lpr_loc_codigoproduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    lpr_loc_periodo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    lpr_loc_nserie: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    lpr_loc_observacao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    lpr_loc_valorperiodo: {
      type: "DOUBLE",
      allowNull: true
    },
    lpr_loc_valortotal: {
      type: "DOUBLE",
      allowNull: true
    },
    lpr_loc_cancelado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    lpr_loc_produtodescricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    lpr_loc_devolvido: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    lpr_loc_datahoraentrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lpr_loc_datahoraretorno: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lpr_loc_qtde: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '1'
    },
    lpr_loc_qtdedevolvida: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    lpr_loc_qtdeEquipamento: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    lpr_loc_percentualajuste: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'locacao_produtos'
  });
};
