/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formaparcelamento', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Descricao: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    ComEntrada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    NPagamentos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TaxaJuro: {
      type: "DOUBLE",
      allowNull: true
    },
    PrazoMedio: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Personalizavel: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Tipo_Intervalo: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Comissao_Produtos: {
      type: "DOUBLE",
      allowNull: true
    },
    Comissao_Servicos: {
      type: "DOUBLE",
      allowNull: true
    },
    DataAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    EnviaMymobile: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    FormaRecebimento: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Comissao_Produtos_Ent: {
      type: "DOUBLE",
      allowNull: true
    },
    Comissao_Servicos_Ent: {
      type: "DOUBLE",
      allowNull: true
    },
    Padrao_Venda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Padrao_OS: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Padrao_Pre: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TPCalculo: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    AtivaIntervalos: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Digitavel: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    TaxaFlex: {
      type: "DOUBLE",
      allowNull: true
    },
    ListaPreco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PrazoFixado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DataPrazoFixado: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    Padrao_Orc: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DiaExtra: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '999'
    },
    Empresas: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    ValorMinimo: {
      type: "DOUBLE",
      allowNull: true
    },
    CodigoPreOcorrencia: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    DescricaoPreOcorrencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoGrupo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    DescricaoGrupo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoIdentificador: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Padrao_Devolucao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ConsiderarOfertas: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    ParcelamentoPadrao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'formaparcelamento'
  });
};
