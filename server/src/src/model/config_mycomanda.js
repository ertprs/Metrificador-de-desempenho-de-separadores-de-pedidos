/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_mycomanda', {
    Sequencia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Grupo1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescricaoGrupo1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Grupo1Botao1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao9: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao10: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao11: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao12: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao13: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao14: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao15: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescricaoGrupo2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Grupo2Botao1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao9: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao10: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao11: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao12: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao13: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao14: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao15: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescricaoGrupo3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Grupo3Botao1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao9: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao10: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao11: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao12: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao13: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao14: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao15: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescricaoGrupo4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Grupo4Botao1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao9: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao10: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao11: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao12: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao13: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao14: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao15: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescricaoGrupo5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Grupo5Botao1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao9: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao10: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao11: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao12: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao13: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao14: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao15: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescricaoGrupo6: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Grupo6Botao1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao9: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao10: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao11: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao12: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao13: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao14: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao15: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescricaoGrupo7: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Grupo7Botao1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao9: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao10: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao11: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao12: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao13: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao14: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao15: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DescricaoGrupo8: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Grupo8Botao1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao3: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao4: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao5: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao6: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao7: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao8: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao9: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao10: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao11: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao12: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao13: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao14: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao15: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao16: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao17: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao18: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao19: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao20: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo1Botao21: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao16: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao17: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao18: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao19: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao20: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo2Botao21: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao16: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao17: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao18: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao19: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao20: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo3Botao21: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao16: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao17: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao18: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao19: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao20: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo4Botao21: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao16: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao17: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao18: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao19: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao20: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo5Botao21: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao16: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao17: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao18: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao19: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao20: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo6Botao21: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao16: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao17: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao18: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao19: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao20: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo7Botao21: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao16: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao17: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao18: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao19: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao20: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Grupo8Botao21: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'config_mycomanda'
  });
};
