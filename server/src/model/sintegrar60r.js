/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sintegrar60r', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Subtipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MesAno: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Quantidade: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    ValorProduto: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    BaseCalculoICMS: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    AliquotaICMS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Brancos: {
      type: DataTypes.STRING(54),
      allowNull: true
    }
  }, {
    tableName: 'sintegrar60r'
  });
};
