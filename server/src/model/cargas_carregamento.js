/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cargas_carregamento', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCarregamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Palete: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Quantidade: {
      type: "DOUBLE",
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CXCompra: {
      type: "DOUBLE",
      allowNull: true
    },
    CXVenda: {
      type: "DOUBLE",
      allowNull: true
    },
    EmpEstoque: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PesoBruto: {
      type: "DOUBLE",
      allowNull: true
    },
    Volume: {
      type: "DOUBLE",
      allowNull: true
    },
    StatusPalete: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    QtdeSeparada: {
      type: "DOUBLE",
      allowNull: true
    },
    UnCx: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'cargas_carregamento'
  });
};
