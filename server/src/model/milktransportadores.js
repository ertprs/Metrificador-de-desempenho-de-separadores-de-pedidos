/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milktransportadores', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NomeTransportador: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TerceirizadoProprio: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PlacaCaminhao: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Capacidade: {
      type: "DOUBLE",
      allowNull: true
    },
    DataCadastro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataAlteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DescricaoCaminhao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    RGTransportador: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CPFTransportador: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Telefone: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Comissao: {
      type: "DOUBLE(11,4)",
      allowNull: false,
      defaultValue: '0.0000'
    },
    Cidade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: 'ATIVO'
    },
    ValorPelaDiferenca: {
      type: "DOUBLE(11,4)",
      allowNull: true,
      defaultValue: '0.0000'
    },
    DataPagamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DiaPagamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    idMod: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Modalidade: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MyCollectorUsuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MyCollectorSenha: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MyCollectorEmpresas: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chkFrete: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    TipoComissao: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: 'R$'
    }
  }, {
    tableName: 'milktransportadores'
  });
};
