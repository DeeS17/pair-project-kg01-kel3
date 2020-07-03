const {Op} = require('sequelize');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsToMany(models.Transaction, {
        through: models.TransactionDetail
      })
      Item.hasMany(models.TransactionDetail)

    }

    static findAllByKeyword(keyword) {
      return this.findAll({
        where: {
          name: {
            [Op.like]: `%${keyword}%`
          },
          order: [
            ['updatedAt', 'DESC']
        ]
        }
      })
    }
  };
  Item.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Please input item's name!`
        }
      }
    },
    imageURL: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Please input item's image URL!`
        },
        isUrl: {
          args: true,
          msg: `Please input this field with URL format!`
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: `Please input item's price!`
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: `Please input item's stock!`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};