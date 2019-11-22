/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('checklist_producao', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idCheckList: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    idProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Pergunta: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Resposta: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    idProducao: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    SeqPergunta: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    idAprovacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    idRealizacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'checklist_producao'
  });
};
