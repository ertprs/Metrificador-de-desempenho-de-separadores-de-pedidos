/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transferenciasprodkits', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDTransferencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    IDPRodutoPrincipal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    QtdePrincipal: {
      type: "DOUBLE",
      allowNull: false
    },
    IdProdutoKit: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    QtdeProdKit: {
      type: "DOUBLE",
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    EmpresaDestino: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'transferenciasprodkits'
  });
};
