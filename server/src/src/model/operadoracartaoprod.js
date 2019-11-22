/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operadoracartaoprod', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoOperadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DescricaoProduto: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Taxa: {
      type: "DOUBLE",
      allowNull: true
    },
    Prazo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Operacao: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'f'
    },
    TaxaOperacao: {
      type: "DOUBLE",
      allowNull: true
    },
    TipoTaxaOperacao: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: 'R$'
    },
    TaxaDiferenciada: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'operadoracartaoprod'
  });
};
