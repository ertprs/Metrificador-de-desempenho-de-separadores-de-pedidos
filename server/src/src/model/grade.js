/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grade', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Coluna: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Linha1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Linha2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Linha3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Linha4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Linha5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Linha6: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Linha7: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Linha8: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    idop: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Titulo1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Titulo2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Titulo3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Titulo4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Titulo5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Titulo6: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Titulo7: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Titulo8: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'grade'
  });
};
