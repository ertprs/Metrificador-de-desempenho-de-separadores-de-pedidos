/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_animais', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataCadastro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Nome: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Sexo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DataNascimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Pelagem: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Especie: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Raca: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Porte: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Sinais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Pedigree: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MicroChip: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeCliente: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Foto: {
      type: "LONGBLOB",
      allowNull: true
    },
    idade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'petshop_animais'
  });
};
