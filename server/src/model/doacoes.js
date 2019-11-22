/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doacoes', {
    Codigo: {
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
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Vendedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Tabela: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TotalPedido: {
      type: "DOUBLE",
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TipoVenda: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(35),
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
    Fone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Excluiu_Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Excluiu_Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Excluiu_DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoTransportadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FretePorConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    Placa: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    UFPlaca: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    VolumeQtde: {
      type: "DOUBLE",
      allowNull: true
    },
    VolumeNumero: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    VolumeMarca: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    VolumeEspecie: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoAntt: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Presenca: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Contribuinte_Icms: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Ndoc: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ISSRetido: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    TOTALM3: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'doacoes'
  });
};
