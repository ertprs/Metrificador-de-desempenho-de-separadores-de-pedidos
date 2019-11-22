/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meuspedidos_clientes', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    razao_social: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nome_fantasia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    cnpj: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    inscricao_estadual: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    suframa: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rua: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    complemento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cep: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    emails: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telefones: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    excluido: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ultima_alteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    importado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'meuspedidos_clientes'
  });
};
