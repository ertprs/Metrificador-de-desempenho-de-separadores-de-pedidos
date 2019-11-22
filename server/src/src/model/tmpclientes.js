/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpclientes', {
    CodigoCliente: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    NumeroPalm: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    TipoPessoa: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NomeCliente: {
      type: DataTypes.STRING(34),
      allowNull: true
    },
    SinalPercentualDiferenciado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PercentualDiferenciado: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Fantasia: {
      type: DataTypes.STRING(34),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(34),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CPFCNPJ: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    RGIE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Contato: {
      type: DataTypes.STRING(34),
      allowNull: true
    },
    Fone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Bloqueado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    LimiteCredito: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CondPag: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Pgto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PrazoMedio: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ConsFinal: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ClienteSimples: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ClienteEspecial: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DiaVisita: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FarmaciaPopular: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'tmpclientes'
  });
};
