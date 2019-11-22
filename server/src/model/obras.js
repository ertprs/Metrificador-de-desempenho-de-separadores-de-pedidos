/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('obras', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    DataInicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Lote: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Quadra: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Loteamento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    QuantidadeConstrucoes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataPrevisaoTermino: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataConclusao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MetragemTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoEmpreiteiro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empreiteiro: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(100),
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
    Complemento: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TotalOrcado: {
      type: "DOUBLE",
      allowNull: true
    },
    EntreRuas: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    StatusObra: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CustoEmpreiteiro: {
      type: "DOUBLE",
      allowNull: true
    },
    NParcelas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Protocolado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    AreaLote: {
      type: "DOUBLE",
      allowNull: true
    },
    TGMaterial: {
      type: "DOUBLE",
      allowNull: true
    },
    TGMaoObra: {
      type: "DOUBLE",
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CodLoteamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'obras'
  });
};
