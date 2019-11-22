/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('folhapagamento_config', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Banco: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    Agencia: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    CodigoEmpresaBanco: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    IdentificacaoEmpresaBanco: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    DestinoMovimentacao: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Historico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Modalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TipoColaborador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    AgenciaDV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ContaDV: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    nUltimaRemessa: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    CNPJResponsavel: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'folhapagamento_config'
  });
};
