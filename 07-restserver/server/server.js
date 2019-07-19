require('./config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(require('./routes/usuario'));

mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if (err) throw err;

    console.log('Base de datos Online!');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});