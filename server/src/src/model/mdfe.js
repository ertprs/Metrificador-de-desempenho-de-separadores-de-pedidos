/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdfe', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Numero: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Data_Emissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Tp_Emitente: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Modal: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Veic_Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Veic_Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Veic_Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Veic_Carroceria: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Veic_Tara: {
      type: "DOUBLE",
      allowNull: true
    },
    Veic_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Veic_Rodado: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Veic_CapKG: {
      type: "DOUBLE",
      allowNull: true
    },
    Veic_CapM3: {
      type: "DOUBLE",
      allowNull: true
    },
    Veic_prop_RNTRC: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Veic_prop_TAC: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Veic_prop_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Veic_prop_CNPJ: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    Veic_prop_IE: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Veic_prop_Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Qtde_NFe: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde_NF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde_CTe: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde_CT: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorTotalCarga: {
      type: "DOUBLE",
      allowNull: true
    },
    Unidade: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    TotalPesoBruto: {
      type: "DOUBLE",
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Ambiente: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    vXml: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    tpEmis: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    IDLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    idEmitente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    cStat: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ChaveMDFe: {
      type: DataTypes.STRING(44),
      allowNull: true
    },
    NAutorizacao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Data_Autorizacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NCancelamento: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Data_Cancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DigVal: {
      type: DataTypes.STRING(28),
      allowNull: true
    },
    Situacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MsgErro: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false
    },
    UF_Encerramento: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Cidade_Encerramento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Data_Encerramento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tpTransp: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    UTC_Autorizacao: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'mdfe'
  });
};
