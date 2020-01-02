const { sequelize } = require('./models/User');

sequelize.sync({ force: true });
