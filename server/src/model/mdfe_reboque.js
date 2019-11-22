/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdfe_reboque', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_MDFe: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Reb_Placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Reb_Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Reb_Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Reb_Carroceria: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Reb_Tara: {
      type: "DOUBLE",
      allowNull: true
    },
    Reb_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Reb_Rodado: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Reb_CapKG: {
      type: "DOUBLE",
      allowNull: true
    },
    Reb_CapM3: {
      type: "DOUBLE",
      allowNull: true
    },
    Reb_prop_RNTRC: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Reb_prop_TAC: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Reb_prop_UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Reb_prop_CNPJ: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    Reb_prop_IE: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Reb_prop_Nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'mdfe_reboque'
  });
};
