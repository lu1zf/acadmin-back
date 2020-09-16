module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('plans', {
      id: {
        type: Sequelize.INTEGER,
        alowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      duration: {
        type: Sequelize.INTEGER,
        alowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        alowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        alowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        alowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('plans');
  },
};
