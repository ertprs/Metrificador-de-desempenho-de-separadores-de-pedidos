/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_avulso', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDOperacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    TipoOperacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    De: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Para: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
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
    tableName: 'log_avulso'
  });
};
