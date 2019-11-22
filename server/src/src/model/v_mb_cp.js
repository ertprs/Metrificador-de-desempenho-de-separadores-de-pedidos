/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_mb_cp', {
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoCaixa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Caixa: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nDocumento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorDocumento: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorPago: {
      type: "DOUBLE",
      allowNull: true
    },
    COntaRP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    historico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    descricao: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    obs: {
      type: DataTypes.STRING(310),
      allowNull: true
    },
    ValorJUros: {
      type: "DOUBLE",
      allowNull: true
    },
    TipoMovimento: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ValorMulta: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorCorrecao: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'v_mb_cp'
  });
};
