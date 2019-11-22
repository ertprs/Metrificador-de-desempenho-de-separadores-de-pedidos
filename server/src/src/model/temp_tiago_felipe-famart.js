/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_tiago_felipe-famart', {
    IDCV: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Referencia: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorUNitario: {
      type: "DOUBLE",
      allowNull: true
    },
    DataMov: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'temp_tiago_felipe-famart'
  });
};
