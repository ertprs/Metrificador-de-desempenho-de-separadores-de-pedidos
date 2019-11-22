/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locacao_produtos_vinculados', {
    lpv_loc_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lpv_loc_sequenciaproduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    lpv_loc_valor: {
      type: "DOUBLE",
      allowNull: true
    },
    lpv_loc_quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    lpv_loc_codigoproduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    lpv_loc_codigolocacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    lpv_loc_lancamentoavulso: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    lpv_loc_desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    lpv_loc_valortotal: {
      type: "DOUBLE",
      allowNull: true
    },
    lpv_loc_faturado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    lpv_loc_codigovenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'locacao_produtos_vinculados'
  });
};
