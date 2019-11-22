/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('letras', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    N0: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    N1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    N2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    N3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    N4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    N5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    N6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    N7: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    N8: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    N9: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'letras'
  });
};
