/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('viagem_palm_produtos_log', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoViagem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false
    },
    DataHora: {
      type: DataTypes.DATE,
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
    Operacao: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'viagem_palm_produtos_log'
  });
};
