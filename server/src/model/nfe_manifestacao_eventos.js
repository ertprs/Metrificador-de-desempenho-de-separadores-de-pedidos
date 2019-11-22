/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfe_manifestacao_eventos', {
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
    xJust: {
      type: DataTypes.STRING(255),
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
    Usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Terminal: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'nfe_manifestacao_eventos'
  });
};
