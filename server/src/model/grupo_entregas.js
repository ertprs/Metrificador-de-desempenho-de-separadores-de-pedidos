/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_entregas', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    QtdeVendas: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    UsuarioExclusao: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    DataHoraExclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MotivoExclusao: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    TotalPesoB: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalPesoL: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalM3: {
      type: "DOUBLE",
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    IdEntregador: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    NomeEntregador: {
      type: DataTypes.STRING(90),
      allowNull: true
    }
  }, {
    tableName: 'grupo_entregas'
  });
};
