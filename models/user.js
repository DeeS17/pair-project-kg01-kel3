'use strict';
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Please enter a valid email address'
        }
      }
    },
    role: DataTypes.STRING,
    accessgroup: DataTypes.SMALLINT
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        if (user.role == 'admin') user.accessgroup = 2;
        else user.accessgroup = 5;

        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};