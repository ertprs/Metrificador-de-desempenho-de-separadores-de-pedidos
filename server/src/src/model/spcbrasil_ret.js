/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spcbrasil_ret', {
    iD: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CPF: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NOME: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DATACOMPRA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NVENDA: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    VALOR: {
      type: "DOUBLE",
      allowNull: true
    },
    ERRO: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'spcbrasil_ret'
  });
};
