/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consultasemanal', {
    idConsultaSemanal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVendedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeVendedor: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    NomeSemana: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ValorGeral: {
      type: "DOUBLE",
      allowNull: true
    },
    Comissao: {
      type: "DOUBLE",
      allowNull: true
    },
    ATEND: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CLIE: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    pPos: {
      type: "DOUBLE",
      allowNull: true
    },
    Margem: {
      type: "DOUBLE",
      allowNull: true
    },
    VlrAg: {
      type: "DOUBLE",
      allowNull: true
    },
    QPed: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PzMed: {
      type: "DOUBLE",
      allowNull: true
    },
    Dom_Ped: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Dom_Rep: {
      type: "DOUBLE",
      allowNull: true
    },
    Dom_Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Seg_Ped: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Seg_Rep: {
      type: "DOUBLE",
      allowNull: true
    },
    Seg_Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Ter_Ped: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Ter_Rep: {
      type: "DOUBLE",
      allowNull: true
    },
    Ter_Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Qua_Ped: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qua_Rep: {
      type: "DOUBLE",
      allowNull: true
    },
    Qua_Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Qui_Ped: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qui_Rep: {
      type: "DOUBLE",
      allowNull: true
    },
    Qui_Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Sex_Ped: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Sex_Rep: {
      type: "DOUBLE",
      allowNull: true
    },
    Sex_Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Sab_Ped: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Sab_Rep: {
      type: "DOUBLE",
      allowNull: true
    },
    Sab_Valor: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'consultasemanal'
  });
};
