/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formaparcelamento_parc', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDForma: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Nparc: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Intervalo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING(5),
      allowNull: false
    }
  }, {
    tableName: 'formaparcelamento_parc'
  });
};
