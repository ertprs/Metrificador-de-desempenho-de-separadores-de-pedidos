/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bloquetos_tamanho', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nbanco: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Dvbanco: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Nomebanco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LocalPagamento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Multa: {
      type: "DOUBLE",
      allowNull: true
    },
    TipoMulta: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Juros: {
      type: "DOUBLE",
      allowNull: true
    },
    TipoJuros: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    JurosMesDia: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Instrucao3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Instrucao4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Instrucao5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Instrucao6: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Instrucao7: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Instrucao8: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Instrucao9: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Formulario: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Agencia: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DvAgencia: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Conta: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    dvConta: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    UltimoNossoNum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Carteira: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Variacao: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Tamanho: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Espacamento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    IMpressora: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ProtestoDias: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    GeraRemessa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Convenio: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Contrato: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CodigoConta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Taxa: {
      type: "DOUBLE",
      allowNull: true
    },
    Registrado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ExibeValores: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ProtestoAcimaDe: {
      type: "DOUBLE",
      allowNull: true
    },
    TipoCarteira: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Operacao: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PrazoDevolucao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Banco_Correspondente: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Cooperativa_Sicoob: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CodigoCobranca_Sicoob: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    ContaCorrente_Sicoob: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    PreFixo_Sicoob: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ProtestoDiaUtil: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Modelo_Cobranca: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Aplicativo_Transmissao: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    G1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Envia_Instrucao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    TipoEmissao: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '2'
    },
    TipoEmitente: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    tpProtesto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CooperativaUniprime: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TipoDesconto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Terceiro_CNPJ: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Terceiro_Nome: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    TipoDevolucao: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    EmpresaSacador: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'bloquetos_tamanho'
  });
};
