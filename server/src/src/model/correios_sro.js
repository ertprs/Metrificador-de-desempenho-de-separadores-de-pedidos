/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('correios_sro', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Objeto: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    NVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    UltimaConsulta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    DataEnvio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Exclusao_Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Exclusao_Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataUltimaConsulta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    UltimaSituacao: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'correios_sro'
  });
};
