/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_produto', {
    tipo: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ''
    },
    sku: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    desc_resumida: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    fornecedor: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    cnpj: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    categorias: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    preço: {
      type: "DOUBLE",
      allowNull: true
    },
    preço_promoção: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    dt_inicio_promo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dt_fim_prom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    visi: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    codigo_interno: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    id_loja: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    dt_ultima_alt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fornecedores: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    tableName: 'v_yh_produto'
  });
};
