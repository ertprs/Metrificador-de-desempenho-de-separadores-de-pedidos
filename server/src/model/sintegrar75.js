/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sintegrar75', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataInicial: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    DataFinal: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    CodigoNCM: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(53),
      allowNull: false
    },
    UM: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    AliquotaIPI: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    AliquotaICMS: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    ReducaoBaseCalculo: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    ReducaoBaseSubstituicao: {
      type: DataTypes.STRING(13),
      allowNull: false
    }
  }, {
    tableName: 'sintegrar75'
  });
};
