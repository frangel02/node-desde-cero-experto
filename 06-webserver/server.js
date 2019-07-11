const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

//express HBS engine\
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Frangel',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});