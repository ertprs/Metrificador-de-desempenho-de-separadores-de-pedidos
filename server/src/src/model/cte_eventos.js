/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cte_eventos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nLote: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Chave: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dhEvento: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Ambiente: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    verAplic: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Lote_cOrgao: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    Lote_Cstat: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Lote_xMotivo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    VerEvento: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Evento_Cstat: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Evento_xMotivo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    tpEvento: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    nSeqEvento: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    dhRegEvento: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    xCorrecao: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    nProt: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    StatusReg: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    dhEntrega: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    xNome: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    TipoDocRec: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Ndoc: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Latitude: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Longitude: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    HashEntrega: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    dhHashEntrega: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ImageBase64: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nProt_Cancelado: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    EntregaCancelada: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'cte_eventos'
  });
};
