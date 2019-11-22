/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('checklist_questions', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCheckList: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Pergunta: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    TipoResposta: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    Obrigar: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'checklist_questions'
  });
};
