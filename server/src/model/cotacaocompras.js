/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaocompras', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDComprador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Obs: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DataInicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DataTermino: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    FretePorConta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorFrete: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeParcela: {
      type: DataTypes.INTEGER(10).UNSIGNED.ZEROFILL,
      allowNull: true
    },
    Intervalo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PIcms: {
      type: "DOUBLE",
      allowNull: true
    },
    IDResponsavel: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataUltimaColeta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Gerado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    CodigoSituacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'cotacaocompras'
  });
};
