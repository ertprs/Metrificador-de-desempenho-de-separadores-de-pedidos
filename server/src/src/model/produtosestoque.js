/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtosestoque', {
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Estoque: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DataUltimaMov: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Tela: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Operacao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CodigoOperacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    EstoqueMinimo: {
      type: "DOUBLE",
      allowNull: true
    },
    EstoqueIdeal: {
      type: "DOUBLE",
      allowNull: true
    },
    QtdeVolume: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    DataHoraUltimaMov: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MovPDV: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'produtosestoque'
  });
};
