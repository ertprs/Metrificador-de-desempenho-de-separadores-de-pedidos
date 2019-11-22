/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cargas', {
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
    NEntregas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Proprio: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Volume: {
      type: "DOUBLE",
      allowNull: true
    },
    Peso: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    NPaletes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TotalDinheiro: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalCheques: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalBoletos: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalDuplicatas: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalDespesas: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalAcerto: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalDiferenca: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalPedidos: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalCobrancas: {
      type: "DOUBLE",
      allowNull: true
    },
    MotivoDiferenca: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    KMSaida: {
      type: "DOUBLE",
      allowNull: true
    },
    KMChegada: {
      type: "DOUBLE",
      allowNull: true
    },
    CodMotorista: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodEntregador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomMotorista: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NomEntregador: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NPaletizado: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalVales: {
      type: "DOUBLE",
      allowNull: true
    },
    Origem: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Mercadoria: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Totalretorno: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalCartoes: {
      type: "DOUBLE",
      allowNull: true
    },
    nViagem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Finalizou_Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Finalizou_Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Finalizou_DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    QtdeLitros_Comb: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Auditoria_Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Auditoria_Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Auditoria_DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Auditoria_Obs: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ValorAdiantamento: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalDescontos: {
      type: "DOUBLE(11,2)",
      allowNull: true,
      defaultValue: '0.00'
    },
    Sep_DataHoraInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Sep_UsuarioInicio: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Sep_TipoSeparacao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Sep_DataHoraTermino: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoProdutoChapa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoProdutoPalete: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeSaidaChapa: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeRetornoChapa: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeSaidaPalete: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeRetornoPalete: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalAbatDevolucao: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'cargas'
  });
};
