/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_conciliacao', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqCC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DATA: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    DESCRICAO: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    NDOCUMENTO: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    VALOR: {
      type: "DOUBLE",
      allowNull: false
    },
    ORIGEM: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    tableName: 'temp_conciliacao'
  });
};
