/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entradas_autorizadosxml', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CNPJ: {
      type: DataTypes.STRING(14),
      allowNull: false
    }
  }, {
    tableName: 'entradas_autorizadosxml'
  });
};
