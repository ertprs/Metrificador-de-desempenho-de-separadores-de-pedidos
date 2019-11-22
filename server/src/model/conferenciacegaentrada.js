/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conferenciacegaentrada', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SequenciaNota: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Divergencia: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    NotaDevolucao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dataHoraEmitidaDevolucao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NotaComplementar: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'conferenciacegaentrada'
  });
};
