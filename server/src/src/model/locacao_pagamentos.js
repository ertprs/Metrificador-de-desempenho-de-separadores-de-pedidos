/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locacao_pagamentos', {
    pag_loc_sequencia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pag_loc_sequenciacr: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    pag_loc_codigolocacao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    pag_loc_finalizado: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    pag_loc_sequenciadevolucao: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'locacao_pagamentos'
  });
};
