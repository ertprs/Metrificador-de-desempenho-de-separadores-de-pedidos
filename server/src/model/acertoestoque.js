/* jshint indent: 2 */


const { Model, DataTypes } = require('sequelize');

class acertoestoque extends Model {
    static init(sequelize) {
        super.init({
            Data: DataTypes.DATEONLY,
            Hora: DataTypes.TIME, 
            CodigoProduto: DataTypes.INTEGER,
            Qtde: DataTypes.DOUBLE,
            Tipo: DataTypes.STRING,
            Empresa: DataTypes.INTEGER,
            Usuario: DataTypes.STRING,
              
            Terminal:        DataTypes.STRING,
              
            Cancelado: 
               DataTypes.INTEGER(10).UNSIGNED,
              
            Valor: DataTypes.DOUBLE,
             
            Obs:  DataTypes.STRING(200),
              
            CodigoFornecedor: DataTypes.INTEGER(10).UNSIGNED,
              
            NomeFornecedor: DataTypes.STRING(100),
              
            BaixaComposicao: DataTypes.INTEGER(1).UNSIGNED,
              
            ValorAntes: DataTypes.DOUBLE,
              
            EstqAtual: DataTypes.DOUBLE,
              
            EstqNovo: DataTypes.DOUBLE,

            Peso: DataTypes.DOUBLE,

            Tipo_Acerto:  DataTypes.STRING(13),
             
            SeqProdEntrada: DataTypes.INTEGER(10).UNSIGNED,
              
            ValorCusto: DataTypes.DOUBLE,

            SeqCentroCusto: DataTypes.INTEGER(10).UNSIGNED,
              
            CodigoDepartamento:  DataTypes.INTEGER(10).UNSIGNED,
              
            SeqProdVenda: DataTypes.INTEGER(10).UNSIGNED,
              
            SeqProdDevolucaoConferencia: DataTypes.INTEGER(10).UNSIGNED,
              
            QtdeEmb:DataTypes.DOUBLE,

            codigosolicitante: DataTypes.INTEGER(10),
              
            NomeSolicitante:  DataTypes.STRING(45),
             
        }, {
            sequelize,
            tableName: 'acertoestoque',
            timestamps: false
        })
    }
}

module.exports = acertoestoque;


/* module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acertoestoque', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false 
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: false
    },
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Valor: {
      type: "DOUBLE",
      allowNull: false
    },
    Obs: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CodigoFornecedor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeFornecedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BaixaComposicao: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ValorAntes: {
      type: "DOUBLE",
      allowNull: true
    },
    EstqAtual: {
      type: "DOUBLE",
      allowNull: true
    },
    EstqNovo: {
      type: "DOUBLE",
      allowNull: true
    },
    Peso: {
      type: "DOUBLE",
      allowNull: true
    },
    Tipo_Acerto: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    SeqProdEntrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ValorCusto: {
      type: "DOUBLE",
      allowNull: true
    },
    SeqCentroCusto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoDepartamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqProdVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqProdDevolucaoConferencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    QtdeEmb: {
      type: "DOUBLE",
      allowNull: true
    },
    codigosolicitante: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    NomeSolicitante: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'acertoestoque'
  });
}; */
