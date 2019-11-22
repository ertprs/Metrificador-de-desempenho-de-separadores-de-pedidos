/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meuspedidos_clientes_contatos', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sequenciacliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cargo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    excluido: {
      type: DataTypes.INTEGER(1),
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
    importado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'meuspedidos_clientes_contatos'
  });
};
