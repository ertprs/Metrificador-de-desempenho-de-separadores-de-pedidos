/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agenda_alteracaoprecos', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Executado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Novo_ValorVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    Novo_ValorCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    Novo_OutrosCustos: {
      type: "DOUBLE",
      allowNull: true
    },
    Novo_CustoFinal: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'agenda_alteracaoprecos'
  });
};
