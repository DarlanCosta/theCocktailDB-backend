module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('drinks', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      drink: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      instructions: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      drink_thumb: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      favorite: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
