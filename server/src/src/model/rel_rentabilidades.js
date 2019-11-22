/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rel_rentabilidades', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Venda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Referencia: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false
    },
    TotalCusto: {
      type: "DOUBLE",
      allowNull: false
    },
    TotalVenda: {
      type: "DOUBLE",
      allowNull: false
    },
    LSC: {
      type: "DOUBLE",
      allowNull: false
    },
    LSV: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'rel_rentabilidades'
  });
};
