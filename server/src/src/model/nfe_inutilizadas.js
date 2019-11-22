/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfe_inutilizadas', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Chave: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Msg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NInutilizacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NumeroInicial: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NumeroFinal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Serie: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Motivo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Utc: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ModeloNF: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: '55'
    },
    Detalhes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
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
    tableName: 'nfe_inutilizadas'
  });
};
