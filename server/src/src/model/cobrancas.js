/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cobrancas', {
    nLote: {
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
    Cobrador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Comissao: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeCob: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalCob: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    TotalRec: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoViagem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeViagem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TotalDespesas: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalCustos: {
      type: "DOUBLE",
      allowNull: true
    },
    NomeLote: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    Obs: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodCarregamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataLimiteBaixa: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataFinalizado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraFinalizado: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'cobrancas'
  });
};
