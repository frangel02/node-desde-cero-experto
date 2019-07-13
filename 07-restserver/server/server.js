require('./config/config')
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//parse Application/x-www-form-urlencoded
app.user(bodyParser.urlencoded({extended: false}))

//parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res){
    res.json('get Usuario');
});

app.post('/usuario', function(req, res){
    //res.json('get Usuario');
    let body = req.body;
    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        });

    }else{
        res.json({
            persona: body
        });
    }
});


app.listen(3000, ()=>{
 console.log('Escuchando desde el puerto',process.env.PORT);
});