const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',

  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then((err) => {
    console.log('Connection has been established successfully.');
  }, (err) => { 
    console.log('Unable to connect to the database:', err);
  });


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
