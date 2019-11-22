/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabelas_preco_produto', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDTabela: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Margem: {
      type: "DOUBLE",
      allowNull: true
    },
    Preco: {
      type: "DOUBLE",
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    UltimaAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    PrecoPromocao: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    Ignora_AutoAtu: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    VendaPDV: {
      type: "DOUBLE",
      allowNull: true
    },
    PrecoAnterior: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'tabelas_preco_produto'
  });
};
