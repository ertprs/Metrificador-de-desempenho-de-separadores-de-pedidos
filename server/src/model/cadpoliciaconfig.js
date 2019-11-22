/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cadpoliciaconfig', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CLF: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CNAE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Grupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CFOPCOMPRA: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CFOPVENDA: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CNPJForTransp: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Codresponsavel: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NomeProduto: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CFOPForaUF: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PadraoCFOP: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'cadpoliciaconfig'
  });
};
