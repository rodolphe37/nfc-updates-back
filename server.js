const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const cors = require('cors');

const port = 5000;

const app = express();
app.use(cors());


// Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/users', users);


app.listen(port, () => {
    console.log('Server started on port' + port);
});