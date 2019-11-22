/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locacao_produtosdevolucao', {
    lpd_loc_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lpd_loc_codigolocacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    lpd_loc_codigoproduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    lpd_loc_sequenciaproduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    lpd_loc_qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    lpd_loc_qtdedevolvida: {
      type: "DOUBLE",
      allowNull: true
    },
    lpd_loc_sequenciadevolucao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    lpd_loc_codigoos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    lpd_loc_cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    lpd_loc_qtdecontrole: {
      type: "DOUBLE",
      allowNull: true
    },
    lpd_loc_valor: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'locacao_produtosdevolucao'
  });
};
