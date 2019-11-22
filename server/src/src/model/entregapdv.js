/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entregapdv', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVendaPDV: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NCupom: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Rua: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Bairro: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Cidade: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Celular: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DataVenda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'entregapdv'
  });
};
