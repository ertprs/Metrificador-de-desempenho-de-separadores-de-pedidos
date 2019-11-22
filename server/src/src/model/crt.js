/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crt', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'a'
    },
    TipoConsignatario: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    Consignatario_Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Consignatario_RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Consignatario_NomeFantasia: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Consignatario_Endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Consignatario_Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Consignatario_Complemento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Consignatario_Pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Consignatario_UF_Departamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Consignatario_Cidade_Distrito: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Notificar: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Notificar_Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Notificar_RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Notificar_NomeFantasia: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Notificar_Endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Notificar_Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Notificar_Complemento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Notificar_Pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Notificar_UF_Departamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Notificar_Cidade_Distrito: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Remetente_Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Remetente_RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Remetente_NomeFantasia: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Remetente_CNPJ_RUC: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    Remetente_Endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Remetente_Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Remetente_Complemento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Remetente_Pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Remetente_UF_Departamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Remetente_Cidade_Distrito: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Destinatario_Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Destinatario_RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Destinatario_NomeFantasia: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Destinatario_Endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Destinatario_Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Destinatario_Complemento: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    Destinatario_Pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Destinatario_UF_Departamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Destinatario_Cidade_Distrito: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Volume_Numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Volume_Marca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Volume_Especie: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Volume_Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    Volume_PesoBruto: {
      type: "DOUBLE",
      allowNull: true
    },
    Volume_PesoLiquido: {
      type: "DOUBLE",
      allowNull: true
    },
    Observacoes: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    RepRemetente_Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    RepRemetente_Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RepRemetente_CPF: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    RepRemetente_RG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RepRemetente_Telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    RepTransportadora_Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    RepTransportadora_Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RepTransportadora_CPF: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    RepTransportadora_RG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RepTransportadora_Telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Frete_VEmitente: {
      type: "DOUBLE",
      allowNull: true
    },
    Frete_VDestinatario: {
      type: "DOUBLE",
      allowNull: true
    },
    Frete_Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DUE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FaturaComercial: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Despachante_Codigo: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Despachante_RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Totalizacao_Moeda: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Totalizacao_Mercadorias: {
      type: "DOUBLE",
      allowNull: true
    },
    Totalizacao_Carga: {
      type: "DOUBLE",
      allowNull: true
    },
    Totalizacao_FreteExterno: {
      type: "DOUBLE",
      allowNull: true
    },
    Totalizacao_ValorReembolso: {
      type: "DOUBLE",
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Volume_M3: {
      type: "DOUBLE",
      allowNull: true
    },
    Emissao_Pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Emissao_UF_Departamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Emissao_Cidade_Distrito: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Consignatario_CNPJ_RUC: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    Notificar_CNPJ_RUC: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    Destinatario_CNPJ_RUC: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    Aduana_Pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Aduana_UF_Departamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Aduana_Cidade_Distrito: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    tableName: 'crt'
  });
};
