/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cargas_separacao_liberacoes', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigosupervisor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    razaosupervisor: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DataHoraLiberacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Operacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    codigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QuantidadeCorte: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoCarregamento: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    QtdeAlterada: {
      type: "DOUBLE",
      allowNull: true
    },
    PaleteRecomecado: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Palete: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TipoPalete: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    tableName: 'cargas_separacao_liberacoes'
  });
};
