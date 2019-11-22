/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('requisicao', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoEmitente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NomeEmitente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TipoRequisicao: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CodigoColaborador: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NomeColaborador: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NomeFornecedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoSolicitante: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NomeSolicitante: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoCategoria: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NomeCategoria: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ValorRequisicao: {
      type: "DOUBLE",
      allowNull: true
    },
    GeraFinanceiro: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Detalhamento: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Status: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    CodigoContaColaborador: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoContaFornecedor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    UsuarioExclusao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TerminalExclusao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MotivoExclusao: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DataHoraExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoVeiculo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NomeVeiculo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PlacaVeiculo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    KmVeiculo: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'requisicao'
  });
};
