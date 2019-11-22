/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_vacinasaplicadas', {
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoAnimal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeAnimal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodigoVacina: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Um: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Quantidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataAplicacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ProximaAplicacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataLancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataRetorno: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    TelefoneCliente: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CodigoOs: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoServico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DescricaoServico: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PDesconto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTotal: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorUnitario: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorTabela: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'petshop_vacinasaplicadas'
  });
};
