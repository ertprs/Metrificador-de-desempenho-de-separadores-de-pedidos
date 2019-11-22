/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comissoesservico', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SequenciaServico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoServico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    Aliquota: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorComissao: {
      type: "DOUBLE",
      allowNull: true
    },
    ComissaoQuitada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DataQuitacaoComissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoFuncionario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeFuncionario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Cancelada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TerceiroEProprio: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TPServ: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NFunc_Serv: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    HorasFuncionario: {
      type: "DOUBLE",
      allowNull: true
    },
    HorasFuncionarioDetalha: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    HorasTotalTecnico: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    tableName: 'comissoesservico'
  });
};
