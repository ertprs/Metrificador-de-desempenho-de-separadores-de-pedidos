/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invetario_lancamentos_lote', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_Inventario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IdLanc_Inventario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdePreVenda: {
      type: "DOUBLE UNSIGNED",
      allowNull: true
    },
    QtdeLancadaInventario: {
      type: "DOUBLE UNSIGNED",
      allowNull: true
    }
  }, {
    tableName: 'invetario_lancamentos_lote'
  });
};
