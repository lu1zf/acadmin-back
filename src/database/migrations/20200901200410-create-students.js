module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER,
        alowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
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
    return queryInterface.dropTable('students');
  },
};
