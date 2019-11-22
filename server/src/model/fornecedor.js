/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fornecedor', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Nome: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Fantasia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cnpj: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Inscricao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    Complemento: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Fone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    Fone1: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Celular: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DataCadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Contato: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UF: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    tableName: 'fornecedor'
  });
};
