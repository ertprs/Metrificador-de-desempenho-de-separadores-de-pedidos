/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temppromocao', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Codigoproduto: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Codigocampanha: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Preco1: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Preco2: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Preco3: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Preco4: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Preco5: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Preco6: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Preco7: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Preco8: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Preco9: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    CodigoVendedor: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Valorpromocional: {
      type: "DOUBLE",
      allowNull: true
    },
    CodTab: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CondiPag: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PrazoMedio: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    tableName: 'temppromocao'
  });
};
