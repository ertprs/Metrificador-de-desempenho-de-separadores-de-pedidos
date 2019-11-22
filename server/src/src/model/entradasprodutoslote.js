/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entradasprodutoslote', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDEntrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqEntProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Quantidade: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Baixado: {
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
    },
    Identificador: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UltimaNF: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'entradasprodutoslote'
  });
};
