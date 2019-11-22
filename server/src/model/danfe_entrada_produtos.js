/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('danfe_entrada_produtos', {
    Seq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDEntrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    P_Codigo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    P_Descricao: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    P_ObsProduto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    P_NCM: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    P_Cst: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    P_CFOP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    P_UN: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    P_Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    P_Unitario: {
      type: "DOUBLE",
      allowNull: true
    },
    P_Desconto: {
      type: "DOUBLE",
      allowNull: true
    },
    P_Total: {
      type: "DOUBLE",
      allowNull: true
    },
    P_BaseICms: {
      type: "DOUBLE",
      allowNull: true
    },
    P_Icms: {
      type: "DOUBLE",
      allowNull: true
    },
    P_IPI: {
      type: "DOUBLE",
      allowNull: true
    },
    P_Picms: {
      type: "DOUBLE",
      allowNull: true
    },
    P_PIPI: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'danfe_entrada_produtos'
  });
};
