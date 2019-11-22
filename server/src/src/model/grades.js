/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grades', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    DataCadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    UltimaAlteracao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NLinhas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NColunas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    TituloLinha: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TituloColuna: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TpGrade: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Espessura: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'grades'
  });
};
