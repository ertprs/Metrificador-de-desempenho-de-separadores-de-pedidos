/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gera_prevenda_volume', {
    gpv_sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gpv_codigo_pedido: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    gpv_quantidade: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    gpv_especie: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '0'
    },
    gpv_marca: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '0'
    },
    gpv_peso_bruto: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    gpv_peso_liquido: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    gpv_padrao_nf: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    gpv_faturamento: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    gpv_faturado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    gpv_usuario: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '0'
    },
    gpv_terminal: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '0'
    },
    gpv_cancelado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pvt_sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    gpv_data_hora: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'gera_prevenda_volume'
  });
};
