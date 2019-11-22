/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controleserial', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Serial: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idEntrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    idSaida: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Excluido: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    DtExcluido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idEmpresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    tabela_entrada: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    tabela_saida: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UsuarioExcluiu: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    idDev: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    idVenda2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    IdentificadorNF: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idInventario: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    tabela_inventario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idItem: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    idItemEntrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'controleserial'
  });
};
