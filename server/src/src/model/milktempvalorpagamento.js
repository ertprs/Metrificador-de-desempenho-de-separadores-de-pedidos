/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milktempvalorpagamento', {
    codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigoProdutor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    QtdEntregue: {
      type: "DOUBLE(11,3)",
      allowNull: true
    },
    Adiantamento: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    CreditoReais: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    DebitoReais: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    CreditoQtd: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    DebitoQtd: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorQualidade: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorProducao: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    Periodo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ValorPorLitro: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorAdicional: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorConseleite: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    EmpresaNome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EmpresaCnpj: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EmpresaTelefone: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ContaBanco: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ContaAgencia: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ContaConta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ContaTitular: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Modalidade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SubTotalValorLeite: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    Percentagem: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    DataExcluido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isQualidade: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'milktempvalorpagamento'
  });
};
