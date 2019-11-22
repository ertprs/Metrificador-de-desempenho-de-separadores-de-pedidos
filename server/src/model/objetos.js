/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('objetos', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    NumeroSerie: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Marca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Cor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Chassis: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    RazaoSocial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Categoria: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ANTT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UF_Placa: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Motor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Ano: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    KM: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'objetos'
  });
};
