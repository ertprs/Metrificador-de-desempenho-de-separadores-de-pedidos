/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mb_log_reajuste', {
    sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SeqCR: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ValorAnterior: {
      type: "DOUBLE",
      allowNull: true
    },
    ValorAtualizado: {
      type: "DOUBLE",
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PercReajuste: {
      type: "DOUBLE",
      allowNull: true
    },
    IdGrupo: {
      type: DataTypes.INTEGER(11),
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
    Mes: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Ano: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'mb_log_reajuste'
  });
};
