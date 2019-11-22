/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empresas_nfe_responsavel', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Empresa: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CNPJ: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    Contato: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    Fone: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    idCSRT: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    CSRT: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    tableName: 'empresas_nfe_responsavel'
  });
};
