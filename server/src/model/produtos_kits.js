/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_kits', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProdutoPrincipal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodProdutoKit: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false
    },
    Export: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Med1: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: ' '
    },
    Med2: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: ' '
    },
    Tam1: {
      type: "DOUBLE(11,3)",
      allowNull: true,
      defaultValue: '0.000'
    },
    Tam2: {
      type: "DOUBLE(11,3)",
      allowNull: true,
      defaultValue: '0.000'
    },
    Desc1: {
      type: "DOUBLE(11,3)",
      allowNull: true,
      defaultValue: '0.000'
    },
    Desc2: {
      type: "DOUBLE(11,3)",
      allowNull: true,
      defaultValue: '0.000'
    },
    Tot1: {
      type: "DOUBLE(11,3)",
      allowNull: true,
      defaultValue: '0.000'
    },
    Tot2: {
      type: "DOUBLE(11,3)",
      allowNull: true,
      defaultValue: '0.000'
    },
    TipoKit: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'produtos_kits'
  });
};
