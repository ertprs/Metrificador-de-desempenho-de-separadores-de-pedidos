/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consultamaps', {
    idConsultaMaps: {
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
    Filtros: {
      type: DataTypes.STRING(900),
      allowNull: false
    },
    CampoBase: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    QtdeMarcadores: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Marcadores: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    TextoInfoView: {
      type: DataTypes.TEXT,
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
    }
  }, {
    tableName: 'consultamaps'
  });
};
