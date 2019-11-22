/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('titulosovis', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDTITULORECEBIMENTOPDA: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IDTITULO: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    REAJUSTEJURO: {
      type: "DOUBLE",
      allowNull: true
    },
    VALORPAGO: {
      type: "DOUBLE",
      allowNull: true
    },
    OBSERVACAODESCONTO: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    DATAHORA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FORMAPAGAMENTO: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    DATAHORAINC: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UUID: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    idusuarioerp: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'titulosovis'
  });
};
