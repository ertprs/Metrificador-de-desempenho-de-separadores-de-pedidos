/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agenda', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Detalhamento: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Fixo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'agenda'
  });
};
