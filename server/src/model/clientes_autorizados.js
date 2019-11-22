/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes_autorizados', {
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DataNascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CPF: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Imagem: {
      type: "LONGBLOB",
      allowNull: true
    },
    ConstaImagem: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Rg: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ende: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Depto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    Obs: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Biometria_TextFIR: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'A'
    },
    CNPJ: {
      type: DataTypes.STRING(18),
      allowNull: true
    }
  }, {
    tableName: 'clientes_autorizados'
  });
};
