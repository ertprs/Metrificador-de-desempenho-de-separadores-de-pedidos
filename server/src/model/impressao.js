/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('impressao', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    OP: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DATA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TAMANHO: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    IMPRESSAO: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    VALOR: {
      type: "DOUBLE(11,2)",
      allowNull: true
    },
    StatusOP: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'E'
    },
    QtdeTelas: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Qtde_base: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Qtde_Floco: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Qtde_Gel: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Qtde_Cromia: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TipoEstampa: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'impressao'
  });
};
