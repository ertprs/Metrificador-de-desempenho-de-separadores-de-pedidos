/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendedoresrestricoes', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    AC: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    AL: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    AM: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    AP: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    BA: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    CE: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    DF: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ES: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    GO: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    MA: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    MG: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    MS: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    MT: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    PA: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    PB: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    PE: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    PI: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    PR: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    RJ: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    RN: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    RO: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    RR: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    RS: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    SC: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    SP: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    SE: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    TOC: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'vendedoresrestricoes'
  });
};
