/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servidoresbase', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Servidor: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Senha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Banco: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Porta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Padrao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MargemSobreCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    ImportaCusto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImportaVenda: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    UltImport_Prod: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UltImport_CLI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Tab_Cli: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Tab_Prod: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImportaPromocao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImportaLote: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImportaFabricante: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ImportaSecao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    importaCST: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    importaProdutoST: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    AlteraTipoProduto: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    TipoProduto: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    importaProdutoDecreto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'servidoresbase'
  });
};
