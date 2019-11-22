/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conferenciacegaentradahistorico', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqConfCega: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Historico: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'conferenciacegaentradahistorico'
  });
};
