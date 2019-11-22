/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liberacaoalteracaovendedorrota', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataHoraSolicitacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Liberado: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    MotivoRecusa: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DataHoraLiberacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    UsuarioLiberou: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoAntigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoNovo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'liberacaoalteracaovendedorrota'
  });
};
