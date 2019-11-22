/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estampador', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Cep: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UF: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    Fone1: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Fone2: {
      type: DataTypes.STRING(14),
      allowNull: true
    }
  }, {
    tableName: 'estampador'
  });
};
