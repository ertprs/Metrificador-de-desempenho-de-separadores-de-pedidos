/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userdefenitions', {
    CodigoUsuario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DataUltimaAlteracao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    StyleButton: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CorFundo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CorFocus: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CorLetraFocus: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TempoAtualizacao: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Wallpaper: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CorGrid1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CorGrid2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Criterio_Coluna_NVenda: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: 'VD'
    },
    Fonte_Grid: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Pesquisa: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Empresa: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'userdefenitions'
  });
};
