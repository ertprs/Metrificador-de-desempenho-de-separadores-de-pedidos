/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cheques_emitente', {
    CPF_CNPJ: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'cheques_emitente'
  });
};
