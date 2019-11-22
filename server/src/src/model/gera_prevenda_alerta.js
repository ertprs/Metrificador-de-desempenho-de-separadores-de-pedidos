/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gera_prevenda_alerta', {
    gpa_sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gpa_codigo_pedido: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    gpa_usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gpa_terminal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gpa_data_hora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gpa_processado: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'gera_prevenda_alerta'
  });
};
