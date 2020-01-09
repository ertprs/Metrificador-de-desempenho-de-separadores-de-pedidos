const { Model, DataTypes } = require('sequelize');

class authuser extends Model {
    static init(sequelize) {
        super.init({ 

          id: {
            type: DataTypes.INTEGER(50),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING(150),
            is: ["^[a-z]+$",'i'],
            allowNull: false,
            required: true,          },
         
          email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            isEmail: true,
            isUnique: true
          },
          password: {
            type: DataTypes.STRING(75),
            allowNull: false,
            required: true,
            len: [2, 10]
          },
                
        }, {
            sequelize,
            tableName: 'authuser',
            timestamps: false
        })
    }
    
    // methods ======================
      // generating a hash
     generateHash (password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    // checking if password is valid
    validPassword (password) {
        return bcrypt.compareSync(password, this.account_key);
    };

  associate (models){
      Accounts.hasMany(models.Items, {
          foreignKey: "owner_id",
          onDelete: "cascade"
      });
  };

  associate (models){
      Accounts.hasMany(models.Transactions, {
          foreignKey: "renter_id"
      });
  };

 
}

module.exports = authuser;