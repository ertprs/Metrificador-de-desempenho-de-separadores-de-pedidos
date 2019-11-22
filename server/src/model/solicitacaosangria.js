/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('solicitacaosangria', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCaixa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ValorLimite: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorAtingido: {
      type: "DOUBLE",
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'solicitacaosangria'
  });
};
