/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estampas', {
    Ref: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Tipo_Tecido: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Qtde_Telas: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Tipo_Tinta1: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Tipo_Tinta2: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Custo: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Margem: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    PReco: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    fotolito: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    floco: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    foil: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    gliter: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    esfera: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    Tamanho: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    CustoFotoLito: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    CustoFoil: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    CustoGliter: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    CustoFloco: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    CustoEsfera: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    QtdeTinta1: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    QtdeTinta2: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    QtdePecas: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    Inicio1: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    Fim1: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    inicio2: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    Fim2: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    Arte: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CustoTelas: {
      type: "DOUBLE",
      allowNull: false
    },
    DataCadastro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'estampas'
  });
};
