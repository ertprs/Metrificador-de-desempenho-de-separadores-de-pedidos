/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelancm', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NCM: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    DESCRICAO: {
      type: DataTypes.STRING(1200),
      allowNull: false
    },
    UN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Nivel1: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Nivel2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Nivel3: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Versao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'tabelancm'
  });
};
