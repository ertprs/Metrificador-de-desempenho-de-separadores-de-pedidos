/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etiqueta_config', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Ncampo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Esquerda: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Superior: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Largura: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    Fonte: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    FonteTamanho: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Negrito: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    OCulto: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    IDEtiqueta: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Forma1: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma3: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma4: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma5: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma6: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma7: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma8: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma9: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma10: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QuebraLinha: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Alinhar: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Formato: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'etiqueta_config'
  });
};
