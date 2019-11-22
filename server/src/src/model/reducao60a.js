/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reducao60a', {
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
    DataEmissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NumeroSerie: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    AliquotaICMS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ValorAcumulado: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    Brancos: {
      type: DataTypes.STRING(79),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'reducao60a'
  });
};
