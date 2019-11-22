/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('retorno_boletos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IdBlq: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Ndoc: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Parc: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NossoNumero: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Quitado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: true
    },
    Juros: {
      type: "DOUBLE",
      allowNull: true
    },
    TaxaBoleto: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorLiquido: {
      type: "DOUBLE",
      allowNull: true
    },
    Lancado: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Efetivacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ValorCreditar: {
      type: "DOUBLE",
      allowNull: true
    },
    Cr_Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'retorno_boletos'
  });
};
