/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contato_sovis', {
    IdContatoErp: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ContatoIdCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DataNascimento: {
      type: DataTypes.DATEONLY,
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
    IdSituacao: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: '0'
    },
    CNPJCPF: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    tableName: 'contato_sovis'
  });
};
