/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imp_prevenda', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    imp_Cab: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    imp_Prod: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    IP: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Porta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Senha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Banco: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    EliminaPedAnt: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ApenasMesmoCli: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ApenasMesmoPag: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    PDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    PadraoPreco: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'imp_prevenda'
  });
};
