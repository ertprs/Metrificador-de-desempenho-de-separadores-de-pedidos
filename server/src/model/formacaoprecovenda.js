/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formacaoprecovenda', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ISS: {
      type: "DOUBLE",
      allowNull: true
    },
    PIS: {
      type: "DOUBLE",
      allowNull: true
    },
    COFINS: {
      type: "DOUBLE",
      allowNull: true
    },
    CONTRIBUICAO_SOCIAL: {
      type: "DOUBLE",
      allowNull: true
    },
    IR: {
      type: "DOUBLE",
      allowNull: true
    },
    OUTROS: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'formacaoprecovenda'
  });
};
