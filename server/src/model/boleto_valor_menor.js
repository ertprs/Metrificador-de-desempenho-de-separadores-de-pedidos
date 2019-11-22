/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boleto_valor_menor', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NossoNumero: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DvNossoNumero: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Cliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IdLote: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Arquivo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ValorDocumento: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPago: {
      type: "DOUBLE",
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Seq_CR: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'boleto_valor_menor'
  });
};
