/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('veiculos', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Renavam: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    placa: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    tara: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    capKG: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    capM3: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    tpProp: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tpVeic: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tpRod: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    tpCar: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Descricao: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CodVinculado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tacProp: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    ufProp: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Rntrc_Prop: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CNPJ_Prop: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    IE_Prop: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    Nome_Prop: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TAF: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NumRegEstadual: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Marca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Chassi: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Ano: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    Frota: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    CodPaisCadastro: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'veiculos'
  });
};
