/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sped_contaanalitica', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataInclusao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DataAlteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Codigo: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    Natureza: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Nivel: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Reg_M115: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Reg_M225: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Reg_M400: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Reg_M410: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Reg_M515: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Reg_M625: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Reg_M800: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    Reg_M810: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ContaRFB: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'sped_contaanalitica'
  });
};
