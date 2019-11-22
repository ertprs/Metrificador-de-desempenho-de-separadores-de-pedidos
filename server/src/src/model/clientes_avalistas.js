/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes_avalistas', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CPF: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    RG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Complemento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    Telefone1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Telefone2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DataNascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    AvalBoleto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    EstadoCivil: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cep: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UF: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Profissao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Funcao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoDepartamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoDistrito: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'clientes_avalistas'
  });
};
