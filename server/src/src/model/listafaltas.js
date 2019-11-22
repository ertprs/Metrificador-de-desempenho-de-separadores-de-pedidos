/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('listafaltas', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    DATAHORA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TERMINAL: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Obs: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CodProd_Principal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoSolicitante: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeSolicitante: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'listafaltas'
  });
};
