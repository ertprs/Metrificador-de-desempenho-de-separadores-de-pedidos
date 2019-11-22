/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('petshop_checklist', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeCliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoAnimal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeAnimal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Especie: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Raca: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Fone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Observacao: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Pulga: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Carapato: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Ouvido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Miliase: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Unha: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Encravada: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Ferida: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Berne: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Pelo: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Mancha: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Falha: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Guia: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Peitoral: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Coleira: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Enforcador: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    LevarAnimal: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodigoTosador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeTosador: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BanhoControle: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'petshop_checklist'
  });
};
