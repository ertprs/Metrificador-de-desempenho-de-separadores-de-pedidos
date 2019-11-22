/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tiles_tiles', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Apelido: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Grupo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ComandoSql: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Titulo1: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Titulo2: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Titulo3: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Campo1: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Campo2: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Campo3: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    UserLocal: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Favorito: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    CorBarraTitulo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CorCorpo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CorTitulo1: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CorTitulo2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CorTitulo3: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CorCampo1: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CorCampo2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CorCampo3: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    icone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    idVisual: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tiles_tiles'
  });
};
