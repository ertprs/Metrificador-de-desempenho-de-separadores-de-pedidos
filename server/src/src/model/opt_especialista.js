/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opt_especialista', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Celular: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DataCadastro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Especialidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CRO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TipoEspecialidade: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'opt_especialista'
  });
};
