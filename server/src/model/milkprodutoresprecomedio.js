/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkprodutoresprecomedio', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Mes: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Ano: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Preco: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    CodigoProdutor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ValorConseleite: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorLitro: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorAdicional: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorIncentivoQualidade: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    ValorIncentivoProducao: {
      type: "DOUBLE(11,4)",
      allowNull: true
    },
    Rota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeRota: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PrecoQualidade: {
      type: "DOUBLE(11,4)",
      allowNull: false,
      defaultValue: '0.0000'
    },
    PrecoLeiteAcido: {
      type: "DOUBLE(11,4)",
      allowNull: true
    }
  }, {
    tableName: 'milkprodutoresprecomedio'
  });
};
