/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('renegociacoes', {
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
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ValorSelecionado: {
      type: "DOUBLE",
      allowNull: true
    },
    PrimeiroVcto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    UltimoVcto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DiasMedio: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Acrescimo: {
      type: "DOUBLE",
      allowNull: true
    },
    Desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeParcelas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Juro: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotalPag: {
      type: "DOUBLE",
      allowNull: true
    },
    SequenciaCTR: {
      type: DataTypes.STRING(2500),
      allowNull: true
    },
    RP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SeqNovasCTS: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Multa: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoClienteOriginal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ClienteOriginal: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'renegociacoes'
  });
};
