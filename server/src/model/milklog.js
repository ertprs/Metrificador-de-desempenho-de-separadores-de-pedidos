/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milklog', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Operacao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Us: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    LinhasAfetadas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SSQL: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Tabela: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Mes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Ano: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'milklog'
  });
};
