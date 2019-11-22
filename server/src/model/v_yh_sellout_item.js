/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_sellout_item', {
    data_hora: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    aliquota: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    precoUnitario: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    sku: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    unidade: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trunc: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: ''
    },
    numeroItem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    tipo_desconto: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: ''
    },
    acrescimo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    tipo_acrescimo: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: ''
    },
    cancelado: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: ''
    },
    id_cupom: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    frete: {
      type: "DOUBLE",
      allowNull: true
    },
    ipi: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cfop: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    produto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    isbn: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ''
    },
    id_loja: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'v_yh_sellout_item'
  });
};
