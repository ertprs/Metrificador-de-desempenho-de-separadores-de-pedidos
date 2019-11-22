/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liberacaodesconto', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeVendedor: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false
    },
    ValorTabela: {
      type: "DOUBLE",
      allowNull: false
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: false
    },
    Liberado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    UsuarioLiberou: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHoraLiberacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Motivo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoPreVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DescontoGeral: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoOrcamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TotalCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCondicional: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoPedidoMynote: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Servicos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    MotivoSolicitaDesconto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MotivoDescontoExcedeu: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DescontoTotal: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'liberacaodesconto'
  });
};
