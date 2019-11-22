/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nota_tamanho', {
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    TamanhoNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    QtdeProdutos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    QtdeServicos: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    UltimaNota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Validado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Espacamento: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    Endereco_Impressora: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeFaturasLInha: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    QtdeFaturasColuna: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    QtdeFaturasEspaco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Nfe_Ativo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    nfe_Ambiente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    nfe_VersaoAplicativo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nfe_Certificado: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nfe_SenhaCertificado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Numero_Manual: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    TipoCertificado: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    nfe_CertificadoA3: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Serie_Contigencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    nfe_EnviaFaturas: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Padrao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ExibeDescontoNFe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Borda_Danfe: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ArquivoDanfe: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Ordem_Impressao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    MyNote_Ativo: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    MyNote_IdVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MyNote_IdCoi: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ArquivoPFX: {
      type: "BLOB",
      allowNull: true
    },
    UltimaNFSe: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    NFSe_Ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    VersaoSchemaNFSe: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MoedaSerie: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'nota_tamanho'
  });
};
