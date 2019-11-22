/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('situacaopandolfi', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    GeraPreVenda: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    GeraPedCompra: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Alt_Adicionar: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Alt_Editar: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Cancelada: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'situacaopandolfi'
  });
};
