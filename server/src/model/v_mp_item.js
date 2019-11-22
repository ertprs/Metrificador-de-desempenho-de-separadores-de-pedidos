/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_mp_item', {
    ite_codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    ite_numero_item: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ite_data_cadastro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ite_usuario_cadastro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ite_descricao: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ite_marca: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ite_est_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    est_descricao: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ite_dep_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    dep_descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ite_gru_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    gru_descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ite_sgr_codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    sgr_descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ite_compra_fornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ite_compra_documento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ite_compra_data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ite_compra_valor: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ite_compra_garantia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ite_valor_mercado: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ite_perc_depreciacao: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ite_status: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tit_descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'v_mp_item'
  });
};
