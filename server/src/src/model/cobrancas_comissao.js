/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cobrancas_comissao', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DiasInicial: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DiasFinal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PerComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorBase: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'cobrancas_comissao'
  });
};
