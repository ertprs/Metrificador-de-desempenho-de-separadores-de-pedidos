/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordemproducao_anotacoes', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NProducao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Anotacao: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'ordemproducao_anotacoes'
  });
};
