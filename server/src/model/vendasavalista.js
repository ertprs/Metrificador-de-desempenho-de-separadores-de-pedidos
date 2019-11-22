/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendasavalista', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NUmero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Fone1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Fone2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CPF: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RG: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'vendasavalista'
  });
};
