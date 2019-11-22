/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendas_obra', {
    IDVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    NomeObra: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ContatoObra: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TelefoneObra: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EnderecoObra: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BairroObra: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CepObra: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CidadeObra: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UFObra: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ContratoObra: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    HorarioUtilizarAte: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    AguaColocadaUsina: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LacreObra: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PecaObra: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'vendas_obra'
  });
};
