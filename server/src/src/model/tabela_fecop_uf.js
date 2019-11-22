/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabela_fecop_uf', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ALIQ_1: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ALIQ_2: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ALIQ_3: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'tabela_fecop_uf'
  });
};
