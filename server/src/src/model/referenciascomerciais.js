/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('referenciascomerciais', {
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DataCadastroReferencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Responsavel: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DataCadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ClienteDesde: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    LimiteCredito: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    PrazoMaximoVendas: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DataUltimaCompra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ValorUltimaCompra: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    DataMaiorCompra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ValorMaiorCompra: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ValorTotalCompras: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    MediaAtrasoDias: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MediaAtrasoValor: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    NTitulosAtrasados: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ValorTitulosAberto: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ConceitoCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Restricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'referenciascomerciais'
  });
};
