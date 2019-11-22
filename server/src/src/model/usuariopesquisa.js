/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuariopesquisa', {
    Usuario: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: '0'
    },
    Tela: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Campo: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    Posicao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tamanho: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Exibe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Criterio: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Format: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Alinhamento: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Caption: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    ExibeTodos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    Altura: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Largura: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Criterio2: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'usuariopesquisa'
  });
};
