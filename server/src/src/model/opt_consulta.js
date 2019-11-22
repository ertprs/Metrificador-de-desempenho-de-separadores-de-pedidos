/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opt_consulta', {
    codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    dataconsulta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    codigocliente: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    nomecliente: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    estesfericaod: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    estesfericooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    estcilindricood: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    estcilindricooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    esteixood: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    esteixooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    estavod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estavoe: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estpavod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estpavoe: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dinesfericaod: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dinesfericooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dincilindricood: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dincilindricooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dineixood: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dineixooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dinavod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dinavoe: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dinpavod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dinpavoe: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    conesfericaod: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    conesfericooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    concilindricood: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    concilindricooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    coneixood: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    coneixooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    conavod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    conavoe: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    conpavod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    conpavoe: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subesfericaod: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subesfericooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subcilindricood: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subcilindricooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subeixood: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subeixooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subaddod: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subaddoe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subprismaod: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subprismaoe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subdnpod: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subdnpoe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subavod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subavoe: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    keraod1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    keraoe1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    keraod2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    keraoe2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    keraod3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    keraoe3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    miras: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lsubesfericaod: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lsubesfericooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lsubcilindricood: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lsubcilindricooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lsubeixood: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lsubeixooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lsubaddod: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lsubaddoe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lsubprismaod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lsubprismaoe: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lsubdnpod: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lsubdnpoe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lsubavod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lsubavoe: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lkeraod1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lkeraoe1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lkeraod2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lkeraoe2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lkeraod3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lkeraoe3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lpedesfericaod: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lpedesfericooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lpedcilindricood: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lpedcilindricooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lpedeixood: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lpedeixooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lpedcbod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lpedcboe: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lpedcortadood: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lpedcortadooe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lpedavod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lpedavoe: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lpedavpod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lpedavpoe: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    miras2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ananmenese: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    obs: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    codigoespecialista: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    nomeespecialista: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    obsfinal: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    dataretorno: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ultimocontato: {
      type: DataTypes.DATE,
      allowNull: true
    },
    condutarefrativa: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    condutamotora: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    condutapatologica: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    alturaod: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    alturaoe: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tipofocal: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Idade: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cancelado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoConduta: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoMotora: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    CodigoPatologica: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'opt_consulta'
  });
};
