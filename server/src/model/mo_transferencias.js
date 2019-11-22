/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mo_transferencias', {
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
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    COdigoCasa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCliente_N: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataContrato: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ParcelaInicial: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ParcelaFinal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ValortotalParcelas: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorParcela: {
      type: "DOUBLE",
      allowNull: true
    },
    PrimeiroVencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DiaVencimento: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    MesReajuste: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    InicioResponsabilidades: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Loteamento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Quadra: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Lote: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    SubDivisao: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NPredial: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NomeCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NomeCliente_N: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    LoteQuitado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VendaNova: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Financeiro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoModalidadeCB: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ModalidadeCB: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ValorTaxa: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorEntrada: {
      type: "DOUBLE",
      allowNull: true
    },
    ReciboContabil: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CodFParcelamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    FParcelamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NumeroContrato: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CodigoCliente_N_2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeCliente_N_2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoCliente_N_4: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCliente_N_3: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tx_valor_entrada: {
      type: "DOUBLE",
      allowNull: true
    },
    tx_primeiro_vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tx_qtde_parcelas: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EmpresaDestinoFinanceiro: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ent_qtde_parcelas: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ent_valor_entrada: {
      type: "DOUBLE",
      allowNull: true
    },
    ent_primeiro_vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ent_fparc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ent_codfparc: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'mo_transferencias'
  });
};
