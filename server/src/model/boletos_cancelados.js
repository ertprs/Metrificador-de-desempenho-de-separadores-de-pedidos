/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boletos_cancelados', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqCR: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ValorDocumento: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPendente: {
      type: "DOUBLE",
      allowNull: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IDBlq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Banco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NossoNumero: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DvNossoNumero: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Motivo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    idRemessa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    nDocumento: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Npagamento: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    DataLancamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'boletos_cancelados'
  });
};
