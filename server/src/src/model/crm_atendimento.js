/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crm_atendimento', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CriadoEm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATE,
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
    Cliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TpAtendimento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TpSolicitacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Prioridade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Departamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tecnico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Problema: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Situacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Agendado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Cancelado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    UsuarioExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TerminalExclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHoraExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataHora_UltimaResposta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UltimaResposta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Contato: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Alertar: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    RegistrouClienteInativo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'crm_atendimento'
  });
};
