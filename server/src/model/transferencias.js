/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transferencias', {
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
    CodigoProduto: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Qtde: {
      type: "DOUBLE",
      allowNull: true
    },
    EmpresaDestino: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Obs: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Custo: {
      type: "DOUBLE",
      allowNull: true
    },
    CustoFinal: {
      type: "DOUBLE",
      allowNull: true
    },
    Venda: {
      type: "DOUBLE",
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Exportado: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    ResponsavelTransporte: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    Usuario_Status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Terminal_Status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Data_Status: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Motivo_Status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VariosProdutos: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    QtdeVolume: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'transferencias'
  });
};
