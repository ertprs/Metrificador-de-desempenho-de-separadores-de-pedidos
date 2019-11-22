/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('templistapreco', {
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    listapreco: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Detalhamento: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Referencia: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Fabricante: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    UnVenda: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CustoFinal: {
      type: "DOUBLE",
      allowNull: true
    },
    Fc_CustoInicial: {
      type: "DOUBLE",
      allowNull: true
    },
    Fc_Frete: {
      type: "DOUBLE",
      allowNull: true
    },
    FC_Desc1: {
      type: "DOUBLE",
      allowNull: true
    },
    Fc_Desc2: {
      type: "DOUBLE",
      allowNull: true
    },
    Fc_desc3: {
      type: "DOUBLE",
      allowNull: true
    },
    fc_IPI: {
      type: "DOUBLE",
      allowNull: true
    },
    VendaT1: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoSubGrupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SubGrupo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CodigoFabricante: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    Ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    QuantidadeCx: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeCxVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    Estoque: {
      type: "DOUBLE",
      allowNull: true
    },
    Secao: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Grupo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CodigoGrupo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoSecao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataPromocao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TipoProduto: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PrecoMaxCons_med: {
      type: "DOUBLE",
      allowNull: true
    },
    MVa: {
      type: "DOUBLE",
      allowNull: true
    },
    Preco1: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoParcelamento: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NomeParcelamento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TaxaFlex: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'templistapreco'
  });
};
