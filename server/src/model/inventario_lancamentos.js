/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventario_lancamentos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    IDInventario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    EstAnterior: {
      type: "DOUBLE",
      allowNull: true
    },
    EstoqueNaFinalizacao: {
      type: "DOUBLE",
      allowNull: true
    },
    CustoNaFinalizacao: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeVolume: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Secao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Grupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Subgrupo: {
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
    tableName: 'inventario_lancamentos'
  });
};
