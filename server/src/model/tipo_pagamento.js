/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_pagamento', {
    IDTIPO: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'tipo_pagamento'
  });
};
