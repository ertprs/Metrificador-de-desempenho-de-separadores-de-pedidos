/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_listacompra', {
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Ref: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Estoque: {
      type: "DOUBLE",
      allowNull: true
    },
    Un: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    Custo: {
      type: "DOUBLE",
      allowNull: true
    },
    IPI: {
      type: "DOUBLE",
      allowNull: true
    },
    Fornecedor: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Emb: {
      type: "DOUBLE",
      allowNull: true
    },
    MediaVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    codigofabrica: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    EstoqueMinimo: {
      type: "DOUBLE",
      allowNull: true
    },
    EstoqueIdeal: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoFabricante: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Fabricante: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    tableName: 'tmp_listacompra'
  });
};
