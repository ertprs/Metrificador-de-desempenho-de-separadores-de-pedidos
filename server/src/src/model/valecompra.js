/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('valecompra', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Numero: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Vendedor: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    VendaOrigem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    VendaUsado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    AlteradoPor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TerminalAlterado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    BaixadoPor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BaixadoEm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ExcluidoEM: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExcluidoPor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SeqCR: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Parcela: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SeqCR_Vista: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorOriginal: {
      type: "DOUBLE",
      allowNull: true
    },
    SeqCr_Prazo: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Editando: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    MovPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'valecompra'
  });
};
