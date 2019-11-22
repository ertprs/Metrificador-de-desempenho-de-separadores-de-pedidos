/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rfid_etiquetas', {
    rfet_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rfet_codigo_produto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    rfet_empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    rfet_codigo_lote: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    rfet_codigo_grade: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    rfet_linha_grade: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    rfet_coluna_grade: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    rfet_data_geracao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rfet_data_impressao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rfet_usuario: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    rfet_terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rfet_epc: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'rfid_etiquetas'
  });
};
