/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('relacaolotetitulosovis', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SequenciaLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SequenciaTitulo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'relacaolotetitulosovis'
  });
};
