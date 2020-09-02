module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      name: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        alowNull: false,
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER,
        alowNull: false,
      },
      weight: {
        type: Sequelize.DOUBLE(6, 3),
        alowNull: false,
      },
      height: {
        type: Sequelize.DOUBLE(1, 2),
        alowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('students');
  },
};
