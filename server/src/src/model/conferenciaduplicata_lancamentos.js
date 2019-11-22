/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conferenciaduplicata_lancamentos', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqConferencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    DataHora: {
      type: DataTypes.DATE,
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
    CodigoAcao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SeqCR: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    MotivoExclusao: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CodigoCliente: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'conferenciaduplicata_lancamentos'
  });
};
