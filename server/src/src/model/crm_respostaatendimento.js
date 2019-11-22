/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crm_respostaatendimento', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDAtendimento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Resposta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Status: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'crm_respostaatendimento'
  });
};
