/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transferenciasentrecaixas', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCaixaS: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CaixaS: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoCaixaE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CaixaE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    DataS: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraS: {
      type: DataTypes.TIME,
      allowNull: true
    },
    UsuarioS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TerminalS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DataA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraA: {
      type: DataTypes.TIME,
      allowNull: true
    },
    UsuarioA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TerminalA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CodMovS: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodMovA: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CodigoAberturaS: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoAberturaE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoForma: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FormaTransferencia: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TipoForma: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    MovPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'transferenciasentrecaixas'
  });
};
