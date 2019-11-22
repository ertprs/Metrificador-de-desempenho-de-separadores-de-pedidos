/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_hospedagem', {
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
    Telefone: {
      type: DataTypes.STRING(15),
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
    CodigoBaia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DescricaoBaia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DataEntrada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataSaida: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    CodigoOS: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Finalizado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'petshop_hospedagem'
  });
};
