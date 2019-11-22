/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recados', {
    idRecados: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    De: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Para: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Assunto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Msg: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Lido: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    DataHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Cancelado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'recados'
  });
};
