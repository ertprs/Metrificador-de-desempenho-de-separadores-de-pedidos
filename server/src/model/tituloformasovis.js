/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tituloformasovis', {
    Sequencia: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDTITULORECEBIMENTOFORMAPAGTO: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IDTITULORECEBIMENTO: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IDFORMAPAGTO: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    VALOR: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'tituloformasovis'
  });
};
