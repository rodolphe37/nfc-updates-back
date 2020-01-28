
module.exports = {
  up: (migration, Sequelize, done) => {
    migration.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      company: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }).done(done);
  },
  down: (migration, Sequelize, done) => {
    migration.dropTable('users').done(done);
  },
};
