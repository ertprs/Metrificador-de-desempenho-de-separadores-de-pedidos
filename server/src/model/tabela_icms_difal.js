/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabela_icms_difal', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NCM: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    EX: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    UF_Destino: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Aliq_Estadual: {
      type: "DOUBLE",
      allowNull: false
    },
    Aliq_Interna: {
      type: "DOUBLE",
      allowNull: false
    },
    pFCP: {
      type: "DOUBLE",
      allowNull: false
    },
    Base_Interna: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '100.000'
    },
    Regiao: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'tabela_icms_difal'
  });
};
