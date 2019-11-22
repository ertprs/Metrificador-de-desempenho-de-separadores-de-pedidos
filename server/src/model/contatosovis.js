/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contatosovis', {
    IDCLIENTE: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: '0'
    },
    CNPJCPFCLIENTE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NOME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TELEFONE: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DATANASCIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OBSERVACAO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'contatosovis'
  });
};
