/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('newsletter_email', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cidade: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    grupo_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    grupo_nome: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    estadoId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'newsletter_email'
  });
};
