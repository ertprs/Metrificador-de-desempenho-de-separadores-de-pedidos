/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendasservicos_insumos_grade', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SequenciaServico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SequenciaInsumo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Grade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Linha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Coluna: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'vendasservicos_insumos_grade'
  });
};
