/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enviados_spc', {
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NDocumento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DescricaoConta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DiasAtrazo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorDocumento: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorJuros: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    DataVenda: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataRegistro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ParcelamaMaisVelha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataQuitacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Impresso: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Exportado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    NumRemessa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoRenegociacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Exportado_Remover: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DataBaixa: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    Sophus_Erro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Sophus_msgErro: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Usuario_Add_SPC: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal_Add_SPC: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Usuario_Del_SPC: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal_Del_SPC: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHoraInclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Sophus_Prot_Inclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Sophus_Prot_Exclusao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataHoraExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'enviados_spc'
  });
};
