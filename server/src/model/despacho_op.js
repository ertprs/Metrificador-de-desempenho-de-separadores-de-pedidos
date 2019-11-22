/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('despacho_op', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoOP: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoCortador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeCortador: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    DataEnvio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraEnvio: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Npecas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorPecas: {
      type: "DOUBLE",
      allowNull: true
    },
    DataAtual: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HoraAtual: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Situacao: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TotalPagar: {
      type: "DOUBLE",
      allowNull: true
    },
    Responsavel: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CodigoEtapa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoProducao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    SeqUtilizacao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'despacho_op'
  });
};
