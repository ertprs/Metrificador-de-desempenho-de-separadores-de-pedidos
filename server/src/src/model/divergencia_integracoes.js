/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('divergencia_integracoes', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoIntegracao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NomeTabela: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NomeCampo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ValorCampo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NovoValorCampo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UserAlterou: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TerminalAlterou: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DataHoraAlterou: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Integracao: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'divergencia_integracoes'
  });
};
