/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_analise_compra_produto', {
    UltimaCompra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    referencia: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    codigofabricante: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    custofinal: {
      type: "DOUBLE",
      allowNull: true
    },
    vendat1: {
      type: "DOUBLE",
      allowNull: true
    },
    estoque: {
      type: "DOUBLE",
      allowNull: true
    },
    idGrade: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    DataCadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    QtdePerda: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    QtdeUsoConsumo: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'temp_analise_compra_produto'
  });
};
