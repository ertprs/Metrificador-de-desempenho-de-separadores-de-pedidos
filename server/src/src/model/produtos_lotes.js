/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_lotes', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NLote: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DataFabricacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataValidade: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Estoque: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Baixado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Bloqueado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Ocultar_Est_Zero: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ObsLote: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Inativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DataHoraLancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataHoraAlteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IdentificadorLote: {
      type: DataTypes.STRING(33),
      allowNull: true
    }
  }, {
    tableName: 'produtos_lotes'
  });
};
