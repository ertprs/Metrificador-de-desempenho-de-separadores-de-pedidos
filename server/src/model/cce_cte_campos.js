/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cce_cte_campos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Grupo_Nome: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    Campo_Nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Grupo_xml: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Campo_xml: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ExigeNumero: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ValoresPossiveis: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Versao: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    tableName: 'cce_cte_campos'
  });
};
