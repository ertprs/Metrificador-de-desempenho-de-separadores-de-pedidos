/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkmoviass', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idProdutor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NProdutor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idModalidade: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DiaPgm: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Vinculo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Mes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Ano: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataExcluido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ValorRS: {
      type: "DOUBLE(11,3)",
      allowNull: true
    },
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    idRota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TotalLitros: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    DataMovi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(90),
      allowNull: true
    }
  }, {
    tableName: 'milkmoviass'
  });
};
