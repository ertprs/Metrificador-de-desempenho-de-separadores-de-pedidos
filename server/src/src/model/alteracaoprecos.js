/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alteracaoprecos', {
    CodigoProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ValorAnterior: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorNovo: {
      type: "DOUBLE",
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    data_inicio_promo_anterior: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data_fim_promo_anterior: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtde_min_promo_anterior: {
      type: "DOUBLE",
      allowNull: true
    },
    data_inicio_promo_novo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data_fim_promo_novo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtde_min_promo_novo: {
      type: "DOUBLE",
      allowNull: true
    },
    TipoAtu: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SeqAtu: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorVendaT1: {
      type: "DOUBLE",
      allowNull: true
    },
    idTabela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Tela: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'alteracaoprecos'
  });
};
