/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('osfixa', {
    idOs: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Km: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p1: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p2: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p3: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p4: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p5: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p6: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p7: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p8: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p9: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p10: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p11: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p12: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p13: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p14: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p15: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p16: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p17: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p18: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p19: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p20: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p21: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p22: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p23: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p24: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p25: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p26: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p27: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p28: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p29: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p30: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p31: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p32: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p33: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p34: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p35: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    p36: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'osfixa'
  });
};
