/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locacao_equipamentos', {
    eqp_loc_sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    eqp_loc_codigoproduto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    eqp_loc_valorperiodo: {
      type: "DOUBLE",
      allowNull: true
    },
    eqp_loc_observacao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    eqp_loc_numeroserie: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    eqp_loc_cancelado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    eqp_loc_locado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    eqp_loc_serialMycommerce: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    eqp_loc_locacaolocado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    eqp_loc_codigoservicovinculado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    eqp_loc_TipoValor: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    eqp_loc_utilizaescala: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'locacao_equipamentos'
  });
};
