/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liberacaocredito', {
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
    NVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Vendedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ValorSolicitado: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorLiberado: {
      type: "DOUBLE",
      allowNull: true
    },
    Liberado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Motivo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UsuarioLiberou: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DataLiberacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraLiberacao: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ValidadeLiberacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TPSolicitacao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PreVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FormaParcelamento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoOrcamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCondicional: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoOS: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'liberacaocredito'
  });
};
