/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integracoes_notas_fiscais', {
    inf_seq: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    inf_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    inf_integracao: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    inf_pedido_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    inf_xml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    inf_importado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'integracoes_notas_fiscais'
  });
};
