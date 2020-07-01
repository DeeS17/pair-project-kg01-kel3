'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TransactionDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TransactionId: {
        allowNull: false,
        references: {
          model: 'Transactions',
          key: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
        type: Sequelize.INTEGER
      },
      ItemId: {
        allowNull: false,
        references: {
          model: 'Items',
          key: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
        type: Sequelize.INTEGER
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TransactionDetails');
  }
};