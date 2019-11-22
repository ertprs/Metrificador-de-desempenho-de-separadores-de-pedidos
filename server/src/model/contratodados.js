/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contratodados', {
    CodigoContrato: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Loteamento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Lote: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Quadra: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    InscricaoMunicipal: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Contabil: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    CodLoteamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Historico: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    DataReajuste: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ValorContrato: {
      type: "DOUBLE",
      allowNull: true
    },
    PercComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    Saldo: {
      type: "DOUBLE",
      allowNull: true
    },
    PercSobreParcela: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    CodigoIndice: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorContratoTotal: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ValorEntrada: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    ObservacaoFinanceira: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DataContrato: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ContratoStatus: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCliente2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataCancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ParcelasCancelamento: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ValorCancelamento: {
      type: "DOUBLE",
      allowNull: true
    },
    TipoEscritura: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'contratodados'
  });
};
