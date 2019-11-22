/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendas_checklist', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Pergunta: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Resposta: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SeqPergunta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Orc: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'vendas_checklist'
  });
};
