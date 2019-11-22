/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locacao_equipamentos_vinculados', {
    lev_eqp_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lev_eqp_sequenciaequipamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    lev_eqp_valor: {
      type: "DOUBLE",
      allowNull: true
    },
    lev_eqp_codigoproduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    lev_eqp_quantidade: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'locacao_equipamentos_vinculados'
  });
};
