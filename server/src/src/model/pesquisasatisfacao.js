/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pesquisasatisfacao', {
    psa_sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    psa_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    psa_data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    psa_software: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    psa_atendimento: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    psa_anotacao: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    tableName: 'pesquisasatisfacao'
  });
};
