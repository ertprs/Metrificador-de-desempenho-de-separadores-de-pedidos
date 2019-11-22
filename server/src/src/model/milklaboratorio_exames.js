/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('milklaboratorio_exames', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idProdutor: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    NomeExame: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Validade: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DataAdicionado: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    DataExcluido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Usuario_Terminal: {
      type: DataTypes.STRING(60),
      allowNull: false
    }
  }, {
    tableName: 'milklaboratorio_exames'
  });
};
