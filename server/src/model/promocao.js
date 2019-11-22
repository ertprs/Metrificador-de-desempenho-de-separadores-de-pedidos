/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promocao', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DataHora: {
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
    Tipo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DataInicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataFim: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Domingo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Segunda: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Terca: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Quarta: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Quinta: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Sexta: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Sabado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    Desconto1: {
      type: "DOUBLE",
      allowNull: true
    },
    DataExclusao: {
      type: DataTypes.DATE,
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
    HoraInicio: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: '00:00:00'
    },
    HoraFim: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: '23:59:59'
    },
    CodigoScannTech: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    QuantidadePack: {
      type: "DOUBLE",
      allowNull: true
    },
    RepetirVenda: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'promocao'
  });
};
