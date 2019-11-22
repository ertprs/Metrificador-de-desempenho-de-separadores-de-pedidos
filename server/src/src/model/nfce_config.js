/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfce_config', {
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    UltimaNFCe: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    Ambiente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Versao: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TipoCertificado: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CertificadoA1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CertificadoA3: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Senha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDToken: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Token: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    Tipo_Impressao: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Marca_Impressora: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Modelo_Impressora: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Porta_Impressora: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Qtde_Linha_Rodape: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '4'
    },
    Impressora_Windows: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TipoFolha: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'I'
    },
    ConfirmarImpressao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ExclusivoPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ModeloImpressaoDireta: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    NCopias: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    ExibirDescontoImpressao: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    QuebrarLinhaDescricao: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Terminal_Configurado: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CFOP_Padrao: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '5102'
    },
    EscolherCFOP: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'nfce_config'
  });
};
