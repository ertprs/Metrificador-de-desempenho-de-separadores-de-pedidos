/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entradasprodutos_dadosxml', {
    SeqEntProd: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    IDEntrada: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    xml_icms_cst: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    xml_icms_base: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    xml_icms_aliquota: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    xml_icms_icms: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    xml_ipi_base: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    xml_ipi_aliquota: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    xml_ipi_ipi: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    xml_pis_cst: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    xml_pis_base: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    xml_pis_aliquota: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    xml_pis_pis: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    xml_cofins_aliquota: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    xml_cofins_cofins: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'entradasprodutos_dadosxml'
  });
};
