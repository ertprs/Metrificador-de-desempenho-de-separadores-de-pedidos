/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etiqueta_tamanho', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MargemSuperior: {
      type: "DOUBLE",
      allowNull: true
    },
    MargemEsquerda: {
      type: "DOUBLE",
      allowNull: true
    },
    DistanciaVertical: {
      type: "DOUBLE",
      allowNull: true
    },
    DistanciaHorizontal: {
      type: "DOUBLE",
      allowNull: true
    },
    AlturaEtiqueta: {
      type: "DOUBLE",
      allowNull: true
    },
    LarguraEtiqueta: {
      type: "DOUBLE",
      allowNull: true
    },
    EtiquetasPorLinha: {
      type: "DOUBLE",
      allowNull: true
    },
    LinhasPorPagina: {
      type: "DOUBLE",
      allowNull: true
    },
    MostraTitulo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Frase: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Frase2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AvancaEtq: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ArquivoModelo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ArquivoModelo_Alt: {
      type: "DOUBLE",
      allowNull: true
    },
    ArquivoModelo_Larg: {
      type: "DOUBLE",
      allowNull: true
    },
    VariasTabelas: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Forma1: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma3: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma4: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma5: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma6: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma7: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma8: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma9: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Forma10: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Modelo_Argox: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PortaImpressora: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UsaIndexador: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    ETIQUETAGONDOLA: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ModoPapel: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    RemetenteVendedor: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    Argox_CampoBarras: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    AgrupaNFPorProduto: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    CarregaDataEnt: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    OcultarCodigoTabela: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'etiqueta_tamanho'
  });
};
