/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkchequeav', {
    Seq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdPro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NmPro: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE(11,3)",
      allowNull: true
    },
    QEntrgue: {
      type: "DOUBLE",
      allowNull: true
    },
    VlrOcorrencia: {
      type: "DOUBLE",
      allowNull: true
    },
    Periodo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ValorLitro: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    idModalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Modalidade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Mes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Ano: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IdRota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Rota: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    GeradoFinanceiro: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    EnviadoNFE: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    NFE_REF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FunRural_Desc: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    codigoEntrada: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Chave_NFE_REF: {
      type: DataTypes.STRING(70),
      allowNull: true
    }
  }, {
    tableName: 'milkchequeav'
  });
};
