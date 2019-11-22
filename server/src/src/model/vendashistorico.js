/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendashistorico', {
    Sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodigoVenda: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: true
    },
    StatusNovo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    StatusVelho: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Historico: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    SequenciaServico: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ImagemAnexo: {
      type: "LONGBLOB",
      allowNull: true
    },
    CodigoOrcamento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    ExtensaoAnexo: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    tableName: 'vendashistorico'
  });
};
