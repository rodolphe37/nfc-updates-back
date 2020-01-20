require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection(
  process.env.DATABASE_URL,
);


connection.connect((err) => {
  if (!err) {
    console.log('Connected');
  } else {
    console.log('Connection Failed');
  }
});

module.exports = connection;
