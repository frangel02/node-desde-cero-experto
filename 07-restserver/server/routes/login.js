const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const app = express();
var jwt = require('jsonwebtoken');




app.post('/login', (req,res)=>{

    let body = req.body;

    Usuario.findOne({email: body.email},(err,UsuarioDB)=>{
     
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if(!UsuarioDB){
          
            return res.status(400).json({
                ok: false,
                err: {
                    message: "User or password incorrect"
                }
            });

        }

        if(!bcrypt.compareSync(body.password, UsuarioDB.password)){

            return res.status(400).json({
                ok: false,
                err: {
                    message: "User or password incorrect"
                }
            });

        }

        let token = jwt.sign({ usuario: UsuarioDB }, process.env.SEED ,{expiresIn: process.env.CADUCIDAD_TOKEN});


        res.json({
            ok: true,
            usuario: UsuarioDB,
            token
        });

    });

});



module.exports = app;