var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'))

/*app.get('/', (req, res) => {


    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url
    }

    res.send(salida);
});
*/
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});