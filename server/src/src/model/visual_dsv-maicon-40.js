/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('visual_dsv-maicon-40', {
    IDCV: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Referencia: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
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
    DataMov: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    Estoque: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'visual_dsv-maicon-40'
  });
};
