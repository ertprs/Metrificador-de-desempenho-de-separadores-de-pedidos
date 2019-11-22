/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_sellout_xml', {
    id_loja: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    numero_doc: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    serie: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    data_emissao: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    chave_doc: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    xml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    tableName: 'v_yh_sellout_xml'
  });
};
