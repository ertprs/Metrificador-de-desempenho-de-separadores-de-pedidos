/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_yh_sellin_xml', {
    id_loja: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    numero_doc: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    serie: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    data_emissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    chave_doc: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    xml: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'v_yh_sellin_xml'
  });
};
