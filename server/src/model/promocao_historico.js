/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promocao_historico', {
    DataAlteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataPromocao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ValorPromocao: {
      type: "DOUBLE",
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataInicioPromocao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'promocao_historico'
  });
};
