/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locacao_equipamentos_escala', {
    lee_loc_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lee_loc_sequenciaequipamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    lee_loc_qtde: {
      type: "DOUBLE",
      allowNull: false
    },
    lee_loc_valor: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'locacao_equipamentos_escala'
  });
};
