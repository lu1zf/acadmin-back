module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'acadmin',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
