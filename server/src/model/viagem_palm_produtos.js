/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('viagem_palm_produtos', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoViagem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataLancamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SeqNF_Remessa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SeqNF_Retorno: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MovEst: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ValorVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    CustoFinal: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'viagem_palm_produtos'
  });
};
