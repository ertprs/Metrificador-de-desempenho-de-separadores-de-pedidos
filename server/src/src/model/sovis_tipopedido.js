/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sovis_tipopedido', {
    IDTIPOPEDIDO: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    IDEMPRESA: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    DESCRICAO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    COLUNAVENDA: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    COLUNATROCA: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    COLUNABONIFICACAO: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    ABAVENDA: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    ABATROCA: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    ABABONIFICACAO: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    SITUACAO: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'sovis_tipopedido'
  });
};
