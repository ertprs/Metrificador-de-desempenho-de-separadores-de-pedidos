/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trocas', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    CodigoFornecedor: {
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
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Motivo: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MotivoExclusao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UsuarioExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataIndenizacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Fornec_Indenizacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    NFTroca: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UsuarioOperando: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TerminalOperando: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoSolicitante: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'trocas'
  });
};
