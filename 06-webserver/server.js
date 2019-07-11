var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

//express HBS engine
app.set('view engine' , 'hbs');

app.get('/', (req, res) => {

    res.render('home',{
        nombre: 'Frangel',
        anio: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});