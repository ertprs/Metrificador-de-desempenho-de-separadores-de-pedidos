/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milkentrada', {
    Codigo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoRota: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DataEntrada: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Quantidade: {
      type: "DOUBLE(11,3)",
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    CodigoProdutor: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Empresa: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Excluido: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    DataExcluido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DataAdicionado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    isAcido: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Alizarol: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    CodigoColetaMB: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    HoraEntrada: {
      type: DataTypes.TIME,
      allowNull: false
    },
    LatitudeMB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LongitudeMB: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'milkentrada'
  });
};
