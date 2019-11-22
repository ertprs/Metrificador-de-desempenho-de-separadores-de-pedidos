/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_banho_tosa', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoAnimal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeAnimal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Plano: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Funcionario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Contato: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    DataInicial: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    QtdVezes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IntervaloDias: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    HoraInicial: {
      type: DataTypes.TIME,
      allowNull: true
    },
    IntervaloHoras: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    HoraFinal: {
      type: DataTypes.TIME,
      allowNull: true
    },
    CidadeBuscar: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UfBuscar: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    RuaBuscar: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NumeroBuscar: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    BairroBuscar: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ComplementoBuscar: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    BanhoTosa: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Rua: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Complemento: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CodigoPlano: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    CodigoServico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoOs: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cep: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    TelefoneContato: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PlanoMensalOS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'petshop_banho_tosa'
  });
};
