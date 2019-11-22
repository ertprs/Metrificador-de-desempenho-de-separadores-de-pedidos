/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transportadores', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NomeTransportador: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    TerceirizadoProprio: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    PlacaCaminhao: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    Capacidade: {
      type: "DOUBLE",
      allowNull: false
    },
    DataCadastro: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DataAlteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DescricaoCaminhao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    RGTransportador: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CPFTransportador: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Telefone: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Endereco: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Comissao: {
      type: "DOUBLE(11,2)",
      allowNull: true
    }
  }, {
    tableName: 'transportadores'
  });
};
