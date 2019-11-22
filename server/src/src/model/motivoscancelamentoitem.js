/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('motivoscancelamentoitem', {
    mci_sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mci_descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mci_cancelado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    mci_terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mci_usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'motivoscancelamentoitem'
  });
};
