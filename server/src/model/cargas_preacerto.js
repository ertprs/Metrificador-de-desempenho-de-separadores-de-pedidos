/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cargas_preacerto', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoCarregamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Cliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Banco: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Agencia: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NConta: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NCheque: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CPF_Emitente: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DataPre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Historico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NDocumento: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    SeqTitulo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    PrazoCartao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorLiquido: {
      type: "DOUBLE",
      allowNull: true
    },
    Tarifa: {
      type: "DOUBLE",
      allowNull: true
    },
    Parcelas: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoOperadora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Codigoproduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CV: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Camara: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: '009'
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'cargas_preacerto'
  });
};
