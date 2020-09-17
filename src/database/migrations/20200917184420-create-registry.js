module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('registry', {
      id: {
        type: Sequelize.INTEGER,
        alowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: { model: 'students', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        alowNull: false,
      },
      plan_id: {
        type: Sequelize.INTEGER,
        references: { model: 'plans', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        alowNull: false,
      },
      start_date: {
        type: Sequelize.DATE,
        alowNull: false,
      },
      end_date: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('registry');
  },
};
